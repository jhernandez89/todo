import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddItem from './AddItem';
import axios from 'axios';

const Todo = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/todos'
        )
        // return top 3 as to not overload UI with 200+ results
        setData(result.data.slice(0, 3))
        setIsLoading(false)
      }
      catch (error) {
        setIsError(true);
      }
    }
    fetchData()
  }, []);

  const addItem = (newItem) => {
    const dataWithNewItem = data.slice();
    dataWithNewItem.push(newItem);
    setData(dataWithNewItem);
  }

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>Sorry, we ran into an error, please try again later</div>
  return (
    <div>
    {data.map(item => {
      const { id } = item;
      return <TodoItem key={id} item={item} />
    })}
    <AddItem addItem={addItem} />
    </div>
  )
}

export default Todo;