import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../displays/TodoList';
import TodoCreator from '../displays/TodoCreator';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TodoCreator />
        <TodoList />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
