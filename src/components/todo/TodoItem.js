import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import done from '../../assets/done.png';
import pending from '../../assets/pending.png';
import deleteIcon from '../../assets/delete.png';

const white = 'rgb(255, 255, 255)';
const offWhite = 'rgb(250, 250, 250)';

// Displays UI todo item container for each individual item
const TodoItem = (props) => {
  const { item, markCompleted, markIncompleted, deleteItem, i, dragOver, dragEnd, dragStart } = props;
  const { title, id, completed } = item;
  const completedIcon = (completed ? done : pending);
  // off-color every odd-numbered item
  const background = (i % 2 === 0) ? white : offWhite;

  const toggleCompleted = () => {
    if(!completed) {
      markCompleted(item);
    } else {
      markIncompleted(item)
    }
  }

  return (
    <div
      className="todo_item_wrapper"
      style={{backgroundColor: background}}
      draggable="true"
      onDragOver={() => dragOver(id, i)}
      onDragStart={() => dragStart(item)}
      onDragEnd={dragEnd}
    >
      <div>{i+1}: {title}</div>
      <div className="icon_wrapper">
        <img className="clickable" onClick={() => deleteItem(id)} src={deleteIcon} alt="completed icon"/>
        <img className="clickable" onClick={toggleCompleted} src={completedIcon} alt="completed icon"/>
      </div>
    </div>
  )
};

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  markIncompleted: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
  dragOver: PropTypes.func.isRequired,
  dragEnd: PropTypes.func.isRequired,
  dragStart: PropTypes.func.isRequired,
};

export default TodoItem;
