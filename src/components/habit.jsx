import React, { Component } from 'react';

class Habit extends Component {
    state = {
      count: 0,
    };

  handleIncrease = () => {
    this.props.onIncrease(this.props.habit)
    };
  handleDecrease = () => {
    this.props.onDecrease(this.props.habit)
    };
  handleDelete = () => {
    this.props.onDelete(this.props.habit)
    };
  render() {
    const { name, count } = this.props.habit;
    return <>
      <li className="habit">
          <span className="habit-name">{name}</span>
          <span className="habit-count">{count}</span>
          <button className ="habit-btn habit-increase" onClick ={this.handleIncrease}>
            <i className="fas fa-plus"></i>
          </button>
          <button className ="habit-btn habit-decrease" onClick ={this.handleDecrease}>
            <i className="fas fa-minus"></i>
          </button>
        <button className="habit-btn habit-delete" onClick={this.handleDelete}>
            <i className="fas fa-trash"></i>
          </button>
      </li>
    </>;
  }
}
export default Habit
