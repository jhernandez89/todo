import React, { useState } from 'react';

const AddItem = (props) => {
  const [newItem, setNewItem] = useState('')
  const { handleSubmit } = props;
  console.log('handlesubmit', handleSubmit)

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