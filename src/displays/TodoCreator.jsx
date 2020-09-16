import React, { Component } from 'react';

// Our TodoCreator component will handle user input to create a new todo in our Redux store.
// NOTE: (This is a great example of using "local state" within our TodoCreator component
//        to add functionality specific to the TodoCreator component. Notice how we don't use
//        the `input` property of TodoCreator's state anywhere else in our app. It's **local**.)
class TodoCreator extends Component {
  // I know this constructor might look unfamiliar!
  // I like to destructure the `props` in the constructor so that I can immediately know from
  // looking at the class what props the component takes. This is a relatively common thing to do,
  // and if it freaks you out, check out "Destructuring Assignments" on MDN.
  constructor(props) {
    super(props);

    // Whip up some nice LOCAL STATE to keep track of the input value and
    // clear it when a new to-do item is added to the list.
    this.state = {
      input: '',
    };

    // Don't forget to bind your event handler's `this` value to the component itself
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    // When the input is changed, updated the value to reflect what's inside of
    // the <input> element on screen
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    // This line prevents the browser default <form> element behaviour of
    // sending a request to the server with the form values. Google this to learn more specifics.
    event.preventDefault();
    // We invoke the callback we passed in on our TodoCreator's `props` with our current input
    if (this.state.input.trim().length) this.props.addTodo(this.state.input);

    // Now we want to clear the input to give a nice UX. It would suck to have to delete what
    // you just typed if you were trying to add multiple todos one after the other!
    this.setState({ input: '' });
  }

  render() {
    return (
      <div className="todoCreator">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.input}
            onChange={this.handleInput}
            style={{ margin: '20px', padding: '5px' }}
            placeholder="Learn Redux..."
            type="text"
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default TodoCreator;
