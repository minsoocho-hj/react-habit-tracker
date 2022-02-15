import React, { Component } from 'react';
import Habit from './habit';

 class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name:'Coding', count: 0 }
    ]
  };

  handleIncrease = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    habits[index].count++;
    this.setState({ habits });
    };
  handleDecrease = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)

    this.setState({ habits });
    };
  handleDelete = (habit) => {
    console.log(`delete ${habit}`)
    };

  render() {
    return (
    <ul>
      {this.state.habits.map(habit => (
        <Habit
          key={habit.id}
          habit={habit}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
          onDelete={this.handleDelete} />
      ))}

    </ul>
    );
  }
}

export default Habits
