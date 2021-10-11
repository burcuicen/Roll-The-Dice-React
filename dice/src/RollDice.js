import React, { Component } from 'react';
import Die from './Die';
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    //an array of possible outcomes
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
  };
  constructor(props) {
    super(props);
    this.state = { die1: 'one', die2: 'one' }; //default state of dices
    this.roll=this.roll.bind(this);
  }
  roll() {
    //pick 2 new rolls
    const newDie1 =
      this.props.sides[
        Math.floor(Math.random() * this.props.sides.length)
      ]; //randomly selects a number(0-6) and selects the index in array
    const newDie2 =
      this.props.sides[
        Math.floor(Math.random() * this.props.sides.length)
      ]; //randomly selects a number(0-6) and selects the index in array

    //set the state with new rolls
    this.setState({die1:newDie1,die2:newDie2})
  }
  render() {
    return (
      <div className="rollDice">
          <div className="container">
          <Die face={this.state.die1}></Die>
        <Die face={this.state.die2}></Die>

          </div>
       
        <button onClick={this.roll}>Roll The Dice</button>
      </div>
    );
  }
}
export default RollDice;
