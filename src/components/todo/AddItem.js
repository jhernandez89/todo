import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';

// UI components for adding item as well as responsible for creation of item object
const AddItem = (props) => {
  const [newItem, setNewItem] = useState('')
  const { addItem } = props;

  // create new entry.  uuidv1() is used to generate unique id in lieu of primary database keys
  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.newItem
    const newItem = {
      title: value,
      completed: false,
      id: uuidv1(),
    }
    // reset input
    setNewItem('');
    addItem(newItem);
  }

    return (
        <form onSubmit={handleSubmit}>
          <input
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            placeholder="New Todo"
            type="text"
            name="newItem"
            required
          />
          <button className="button" type="submit">Add</button>
        </form>
    )
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default AddItem;
