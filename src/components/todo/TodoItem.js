import React, { Fragment, useState } from 'react';
import done from '../../assets/done.png';
import pending from '../../assets/pending.png';
import deleteIcon from '../../assets/delete.png';


const white = 'rgb(255, 255, 255)';
const offWhite = 'rgb(250, 250, 250)';
const TodoItem = (props) => {
  const [checked, setChecked] = useState(false);

    console.log(props)
    const { item, markCompleted, deleteItem, i } = props;
    const { title, id, completed } = item;
    const completedMessage = (completed ? 'mark uncompleted' : 'mark completed')
    const completedIcon = (completed ? done : pending);
    const background = (i % 2 === 0) ? white : offWhite;
    console.log('background!', background);
    return (
        <div className="todo_item_wrapper" style={{backgroundColor: background}} >
          <div>{title}</div>
          <div className="icon_wrapper">
            <img onClick={() => deleteItem(id)} src={deleteIcon} alt="completed icon"/>
            <img onClick={() => markCompleted(id)} src={completedIcon} alt="completed icon"/>
          </div>

        </div>
    )
}

export default TodoItem;