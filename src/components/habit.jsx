import React, { Component } from 'react';

class Habit extends Component {
    state = {
      count: 0,
      };
    handleIncrease = () => {
      this.setState({ count: this.state.count + 1})
      };
    handleDecrease = () => {
      const count = this.state.count - 1;
      this.setState({ count: count < 0 ? 0 : count})
      };
  render() {
    const { name } = this.props.habit
    return <>
      <li className="habit">
          <span className="habit-name">{name}</span>
          <span className="habit-count">{this.state.count}</span>
          <button className ="habit-btn habit-increase" onClick ={this.handleIncrease}>
            <i className="fas fa-plus"></i>
          </button>
          <button className ="habit-btn habit-decrease" onClick ={this.handleDecrease}>
            <i className="fas fa-minus"></i>
          </button>
          <button className ="habit-btn habit-delete">
            <i className="fas fa-trash"></i>
          </button>
      </li>
    </>;
  }
}
export default Habit
