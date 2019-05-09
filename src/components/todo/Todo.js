import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

const Todo = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(null);

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
  if (isLoading) return <div>loading...</div>
  if (isError) return <div>Sorry, we ran into an error, please try again later</div>
  return (
    <div>
    {data.map(item => {
      const { id } = item;
      console.log('item', id);
      return <TodoItem key={id} item={item} />
    })}
    </div>
  )
}

export default Todo;