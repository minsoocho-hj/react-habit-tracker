import React, { Component } from 'react';

class Habit extends Component {
    state = {
      count: 0,
      };
    handleIncreament = () => {
      this.setState({ count: this.state.count + 1})
      };
    handleDecreament = () => {
      const count = this.state.count - 1;
      this.setState({ count: count < 0 ? 0 : count})
      };
  render() {
    return <>
      <li className="habit">
          <span className="habit-name">Reading</span>
          <span className="habit-count">{this.state.count}</span>
          <button className ="habit-btn habit-increase" onClick ={this.handleIncreament}>
            <i className="fas fa-plus"></i>
          </button>
          <button className ="habit-btn habit-decrease" onClick ={this.handleDecreament}>
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
