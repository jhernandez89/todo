import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import done from '../../assets/done.png';
import pending from '../../assets/pending.png';
import deleteIcon from '../../assets/delete.png';

const white = 'rgb(255, 255, 255)';
const offWhite = 'rgb(250, 250, 250)';

// Displays UI todo item container for each individual item
const TodoItem = (props) => {
  const { item, markCompleted, deleteItem, i } = props;
  const { title, id, completed } = item;
  const completedIcon = (completed ? done : pending);
  // trigger animation when task is completed
  const animate = completed ? 'animated jackInTheBox' : '';
  // off-color every odd-numbered item
  const background = (i % 2 === 0) ? white : offWhite;

  return (
    <div className={(animate) + " todo_item_wrapper"} style={{backgroundColor: background}} >
      <div>{title}</div>
      <div className="icon_wrapper">
        <img className="clickable" onClick={() => deleteItem(id)} src={deleteIcon} alt="completed icon"/>
        <img className="clickable" onClick={() => markCompleted(id)} src={completedIcon} alt="completed icon"/>
      </div>
    </div>
  )
};

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
};

export default TodoItem;
