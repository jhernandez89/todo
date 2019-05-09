import React, { useState } from 'react';
import uuidv1 from 'uuid/v1';

const AddItem = (props) => {
  const [newItem, setNewItem] = useState('')
  const { addItem } = props;
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.newItem
    const newItem = {
      title: value,
      completed: false,
      id: uuidv1(),
    }
    setNewItem('');
    addItem(newItem);
    console.log(newItem);
  }

    return (
        <form onSubmit={handleSubmit}>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            placeholder="New Todo"
            type="text"
            name="newItem"
            require
          />
          <button type="submit">Add</button>
        </form>
    )
}

export default AddItem;