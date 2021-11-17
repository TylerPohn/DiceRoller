import React, { Component } from 'react';
import './styles.css';
import { render } from 'react-dom';
import Stack from './Stack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiplier: 2,
      modifier: 100,
      counter: 12,
      outcome: 0,
    };
    this.updateOutcome = this.updateOutcome.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateMult = this.updateMult.bind(this);
    this.updateMod = this.updateMod.bind(this);
    // this.updateState = this.updateState.bind(this);
  }
  increment = () => updateMult(this.state.multiplier + 1);
  // increment = () => this.setState({ counter: this.state.counter + 1 });
  decrement = () => this.setState({ counter: this.state.counter - 1 });
  updateOutcome = (num) => {
    this.setState({ outcome: num });
  };
  updateMult = (num) => {
    this.setState({ multiplier: num });
  };
  updateMod = (num) => {
    this.setState({ modifier: num });
  };
  // updateState() {
  //   this.state = setState();
  // }
  //need a func to replace what we want setState to look like
  //get components set up and come back to state
  //easier with more to visualize and where state will change
  //what components will be able to pass information
  componentDidMount() {
    console.log('Componenet Did Mount');
  }

  render() {
    //in order to make goblin a prop that's availbale to stack...
    //when i render this instance of stack, i must pass prop down
    return (
      <div>
        {/* //to create a stack instance that has access to goblin, and also has the label goblin */}
        <Stack
          updateOutcome={this.updateOutcome}
          increment={this.increment}
          decrement={this.decrement}
          updateMult={this.updateMult}
          updateMod={this.updateMod}
          state={this.state}
        />
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Componenet Did Update');
  }
}

export default App;
