import React, { Component } from 'react';

class TodoCreator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Render the todo item!
    return (
      <div className="todoCreator">
        <input
          style={{ margin: '20px' }}
          placeholder="Type new to-do..."
          type="text"
        />
        <button type="button">Add</button>
      </div>
    );
  }
}

export default TodoCreator;
