import React, { Fragment } from 'react';

const TodoItem = (props) => {
    console.log(props)
    const { item } = props;
    const { title } = item;
    return (
        <Fragment>
          <div>{title}</div>
        </Fragment>
    )
}

export default TodoItem;