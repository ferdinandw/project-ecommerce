import React, { Component } from "react";
// import styled from 'styled-components'

class Counter extends Component {
  state = {
    count: 0,
  };

  IncreamentItem() {
    this.setState({ count: this.state.count + 1 });
  }
  DecreaseItem() {
    this.setState({ count: this.state.count - 1 });
    if (this.state.count <= 0) {
      window.alert("Can't Decreament");
      this.setState({ count: (this.state.count = 0) });
    }
  }
  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.IncreamentItem()}>+</button>
        <input type="text" className="number" value={this.state.count}></input>
        <button className="Decreament" onClick={() => this.DecreaseItem()}>
          -
        </button>
        <br />
        <button className="reset" onClick={() => this.reset()}>
          Reset
        </button>
        {/* <h1>Count {this.state.count}</h1> */}
      </div>
    );
  }
}
export default Counter;
