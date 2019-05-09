import React, { Fragment, useState } from 'react';
import done from '../../assets/done.png'


const white = 'rgb(255, 255, 255)';
const offWhite = 'rgb(250, 250, 250)';
const TodoItem = (props) => {
  const [checked, setChecked] = useState(false);

    console.log(props)
    const { item, markCompleted, deleteItem, i } = props;
    const { title, id, completed } = item;
    const completedMessage = (completed ? 'mark uncompleted' : 'mark completed')
    const background = (i % 2 === 0) ? white : offWhite;
    console.log('background!', background);
    return (
        <div className="todo_item_wrapper" style={{backgroundColor: background}} >
          <img src={done}/>
          <div>{title}</div>
          <button onClick={() => deleteItem(id)}>delete</button>
          <button onClick={() => markCompleted(id)}>{completedMessage}</button>
        </div>
    )
}

export default TodoItem;