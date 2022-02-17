import React, { Component } from 'react'

export default class HabitAddForm extends Component {
  inputRef = React.createRef();
  render() {
    return (
      <form className="add-form" onSubmit={this.props.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder='Add your task' />
        <button className="add-btn">Add task!</button>
      </form>
    )
  }
}
