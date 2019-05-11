import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddItem from './AddItem';
import axios from 'axios';
import sortByCompleted from '../../sort';

// parent container for Todo app.  Set to root route since this app only does one thing.
const Todo = () => {
  // react hooks to set state in functional component (came out in v16)
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [draggedElement, setDraggedElement] = useState(null);
  const [currentDraggedIndex, setCurrentDraggedIndex] = useState(null);

  // API call to start out with 3 tasks
  useEffect(() => {
    // fetchData is defined in useEffect to have access to setData() without passing parameter
    const fetchData = async() => {
      try {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/todos'
        )
        // return top 3 as to not overload UI with 200+ results
        const topThree = result.data.slice(0, 3);
        setData(topThree);
        setIsLoading(false)
      }
      catch (error) {
        setIsError(true);
      }
    }
    fetchData()
  }, []);

  const reInsertElementAndToggleComplete = (element, i) => {
    const dataResorted = data.filter((item) => item !== element);
    const toggleCompleted = {
      ...element,
      completed: !element.completed,
    }
    dataResorted.splice(i, 0, toggleCompleted);
    return dataResorted;
  }

  // Mark todo item as completed
  const markCompleted = (currentELement) => {
    const dataResorted = reInsertElementAndToggleComplete(currentELement, data.length-1);
    setData(dataResorted);
  };

  const markIncompleted = (currentELement) => {
    const dataResorted = reInsertElementAndToggleComplete(currentELement, 0);
    setData(dataResorted);
  };

  // Delete todo item
  const deleteItem = (id) => {
    const updatedData = data.filter(item => {
      if(item.id !== id)
        return item;

      return null;
    });
    setData(updatedData);
  };

  // Add item (called from AddItem.js where it is created)
  const addItem = (newItem) => {
    // slicing to not alter variable data
    const dataWithNewItem = data.slice();
    dataWithNewItem.push(newItem);
    setData(dataWithNewItem);
  };

  // user starts dragging item
  const dragStart = (item) => {
    setDraggedElement(item);
  };

  // reset dragged elements in state
  const dragEnd = () => {
    setCurrentDraggedIndex(null);
    setDraggedElement(null)
  };
  // triggers when element is dragged over
  // using drag over instead of drag end to show users live
  const dragOver = (id, i) => {
    // don't do anything if it's over itself or if it's dragging over
    // the same element multiple times
    if(id === draggedElement.id || i === currentDraggedIndex)
      return;

    // take current element out
    const dataReorted = data.filter((item) => item !== draggedElement);

    // put current element back in at new location
    dataReorted.splice(i, 0, draggedElement);
    setData(dataReorted);
    setCurrentDraggedIndex(i);
  }

  // wait for promise to resolve and error handling
  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Sorry, we ran into an error, please try again later</div>;
  
  // sort data by uncompleted items first

  return (
    <div>
      <AddItem addItem={addItem} />
      {data.map((item, i) => {
        const { id } = item;
        return (
          <TodoItem 
            key={id}
            item={item}
            markCompleted={markCompleted}
            markIncompleted={markIncompleted}
            deleteItem={deleteItem}
            dragStart={dragStart}
            dragOver={dragOver}
            dragEnd={dragEnd}
            i={i}
          />
        )
      })}
    </div>
  )
};

export default Todo;
