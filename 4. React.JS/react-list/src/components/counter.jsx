import React, { Component } from "react";

class Couter extends Component {
  state = { value: this.props.initialValue };

  changeCounterBy = num => {
    let newState = { value: this.state.value + num };
    this.setState(newState);
  };

  render() {
    return (
      <div>
        <h1>Counter Value</h1>
        <button onClick={() => this.changeCounterBy(-10)}>-10</button>
        <button onClick={() => this.changeCounterBy(-5)}>-5</button>
        <button onClick={() => this.changeCounterBy(-1)}>-1</button>
        &nbsp;
        {this.state.value}
        &nbsp;
        <button onClick={() => this.changeCounterBy(+1)}>+1</button>
        <button onClick={() => this.changeCounterBy(+5)}>+5</button>
        <button onClick={() => this.changeCounterBy(+10)}>+10</button>
      </div>
    );
  }
}
export default Couter;
