import React, { Component } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: Date.now() - 1, name: 'Reading', count: 0 },
      { id: Date.now() - 2, name: 'Running', count: 0 },
      { id: Date.now(), name:'Coding', count: 0 }
    ]
  };

  handleAddTask = (e) => {
    e.preventDefault();
    const habits = this.state.habits;
    const taskName = document.querySelector(".add-input").value;
    const newHabit = { id: Date.now(), name: taskName, count: 0 };
    // this.setState({ habits: [...this.state.habits, newHabit] });
    this.setState({ habits: habits.concat(newHabit) });
    console.log(this.state.habits)
  };

  handleIncrease = (habit) => {
    const habits = [...this.state.habits] // state에 있는 배열에 바로 접근하면 안되기때문에 spread operator 사용함.
    const index = habits.indexOf(habit)
    habits[index].count++;
    this.setState({ habits }); // 복사한 배열 업데이트 시켜주기. 키,밸류 이름 같은 경우 { 이름하나 } 작성.
  };

  handleDecrease = (habit) => {
    const habits = [...this.state.habits]
    const index = habits.indexOf(habit)
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits //spread operator를 쓰지않는 이유는 이미 filter를 이용해 새로운 배열을 만들었기 때문.
    const filter_habit = habits.filter(item => item.id !== habit.id); // array.filter는 조건이 맞는 아이들을 모아서, 새로운 배열(새로운 컨테이너)를 만들어 주기 때문
    this.setState({ habits: filter_habit });
  };

  handleReset = () => {
    // const habits = [...this.state.habits]
    // habits.map(item => (item.count = 0))
    const habits = this.state.habits.map(habit => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits })
  }

  render() {
    return (
      <>
      <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <HabitAddForm onSubmit={this.handleAddTask}/>
      <Habits
        habits={this.state.habits}
        onIncrease={this.handleIncrease}
        onDecrease={this.handleDecrease}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
