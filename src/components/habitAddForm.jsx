import React, { Component } from 'react'

export default class HabitAddForm extends Component {
  inputRef = React.createRef(); //ref 리액트기능 document ~~value해서 값 받아오는것 대신.브라우저에서 돔요소에 접근하지않고, 필요시에는 리액트 제공 createref통해 멤버변수 정한다음, 해당하는 ref연결하면된다.
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
