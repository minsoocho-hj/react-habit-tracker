import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
        <i className="navbar-logo fas fa-leaf"></i>
        <h1>Habit tracker</h1>
          <span className="nav-count">{this.props.totalCount}</span>
      </nav>
      </>
    )
  }
}
