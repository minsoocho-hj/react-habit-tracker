import React, { Component } from 'react';
import Habit from './habit';

 class Habits extends Component {

  render() {
    return (
      <>
      <ul>
        {this.props.habits.map(habit => (
          <Habit
            key={habit.id} // 리액트 제공 key 키워드. 배열 이터레잍 할 땐 키 값 반드시 프롭으로 전달해줘야함.
            habit={habit}
            onIncrease={this.props.onIncrease}
            onDecrease={this.props.onDecrease}
            onDelete={this.props.onDelete} /> // props으로 전달시켜주기 ~ 그래서 habit 컴포넌트에서 이 전달된 프롭에 접근해서 데이터 활용 가능 ~~
        ))}
      </ul>
      <button className="habits-reset" onClick={this.props.onReset}>Reset</button>
      </>
    );
  }
}

export default Habits
