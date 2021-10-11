import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
  static defaultProps = {
    //an array of possible outcomes
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  }
  constructor(props) {
    super(props)
    this.state = { die1: 'one', die2: 'one', isRolling: false } //default state of dices
    this.roll = this.roll.bind(this)
  }
  roll() {
    //pick 2 new rolls
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ] //randomly selects a number(0-6) and selects the index in array
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ] //randomly selects a number(0-6) and selects the index in array

    //set the state with new rolls
    this.setState({ die1: newDie1, die2: newDie2, isRolling: true })
    //wait one second and isRolling should turn to false
    setTimeout(() => {
      this.setState({ isRolling: false })
    }, 1000)
  }
  render() {
    return (
      <div className="rollDice">
        <div className="container">
          <Die face={this.state.die1} rolling={this.state.isRolling}></Die>
          <Die face={this.state.die2} rolling={this.state.isRolling}></Die>
        </div>

        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll The Dice'}
        </button>
      </div>
    )
  }
}
export default RollDice
