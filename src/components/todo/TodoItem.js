import React, { Fragment, useState } from 'react';

const TodoItem = (props) => {
  const [checked, setChecked] = useState(false);

    console.log(props)
    const { item, markCompleted } = props;
    const { title, id } = item;
    return (
        <Fragment>
          <div>{title}</div>
          <button>delete</button>
          <button onClick={() => markCompleted(id)}>mark completed</button>
        </Fragment>
    )
}

export default TodoItem;