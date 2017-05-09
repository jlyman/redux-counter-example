import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.onIncrementClick = this.onIncrementClick.bind(this);
    this.onDecrementClick = this.onDecrementClick.bind(this);
    this.onIncrementIfLessThan10Click = this.onIncrementIfLessThan10Click.bind(this);
    this.onAdd4Click = this.onAdd4Click.bind(this);
  }

  onIncrementClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  onDecrementClick() {
    this.setState({ counter: this.state.counter - 1 });
  }

  onIncrementIfLessThan10Click() {
    if (this.state.counter < 10) {
      this.setState({ counter: this.state.counter + 1 });
    }
  }

  onAdd4Click() {
    this.setState({ counter: this.state.counter + 4 });
  }

  render() {
    return (
      <div className="App">
        <p>
          Clicked: <span id="value">{this.state.counter}</span> times
          <button onClick={this.onIncrementClick}>+</button>
          <button onClick={this.onDecrementClick}>-</button>
          <button onClick={this.onIncrementIfLessThan10Click}>Increment if less than 10</button>
          <button onClick={this.onAdd4Click}>Add 4</button>
        </p>
      </div>
    );
  }
}

export default App;
