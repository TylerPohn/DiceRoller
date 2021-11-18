import React, { Component } from 'react';
import './styles.css';
import { render } from 'react-dom';
import Stack from './Stack';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Need to get rid of multiplier and modifier below in favor of row1 and row2
      //having their own mult and mods

      multiplier: 2,
      modifier: 0,
      outcome: 0,
      row1: {
        multiplier: 0,
        modifier: 0,
        dice: 'D4',
        sides: 4,
      },
      row2: {
        multiplier: 0,
        modifier: 0,
        dice: 'D6',
        sides: 6,
      },
      row3: {
        multiplier: 0,
        modifier: 0,
        dice: 'D8',
        sides: 8,
      },
      row4: {
        multiplier: 0,
        modifier: 0,
        dice: 'D10',
        sides: 10,
      },
      row5: {
        multiplier: 0,
        modifier: 0,
        dice: 'D12',
        sides: 12,
      },
      row6: {
        multiplier: 0,
        modifier: 0,
        dice: 'D20',
        sides: 20,
      },
    };

    this.updateOutcome = this.updateOutcome.bind(this);
    this.incrementMult = this.incrementMult.bind(this);
    this.decrementMult = this.decrementMult.bind(this);
    this.incrementMod = this.incrementMod.bind(this);
    this.decrementMod = this.decrementMod.bind(this);
    this.updateMult = this.updateMult.bind(this);
    this.updateMod = this.updateMod.bind(this);

    this.updateRowMult = this.updateRowMult.bind(this);
  }
  //INCREMENT / DECREMENT METHODS
  incrementMult = (mult, name, currentState) => {
    this.updateRowMult(++mult, name, currentState);
  };
  //write new incrementMult like above
  decrementMult = (mult, name, currentState) => {
    this.updateRowMult(--mult, name, currentState);
  };
  incrementMod = (mod, name, currentState) => {
    this.updateRowMod(++mod, name, currentState);
  };
  decrementMod = (mod, name, currentState) => {
    this.updateRowMod(--mod, name, currentState);
  };

  //UPDATER METHODS

  updateRowMult = (multiplier, name, currentStateRow) => {
    const newState = { ...currentStateRow };
    const setStateObj = {};
    newState.multiplier = multiplier;
    setStateObj[name] = newState;
    //{row1: {multiplier: 0, modifier: 0}}
    this.setState(setStateObj);
  };
  updateRowMod = (modifier, name, currentStateRow) => {
    const newState = { ...currentStateRow };
    const setStateObj = {};
    newState.modifier = modifier;
    setStateObj[name] = newState;
    //{row1: {multiplier: 0, modifier: 0}}
    this.setState(setStateObj);
  };
  updateOutcome = (num) => {
    this.setState({ outcome: num });
  };
  updateMult = (num) => {
    this.setState({ multiplier: num });
  };
  updateMod = (num) => {
    this.setState({ modifier: num });
  };

  componentDidMount() {
    console.log('App Did Mount');
  }

  render() {
    return (
      <div>
        <Stack
          updateOutcome={this.updateOutcome}
          incrementMult={this.incrementMult}
          decrementMult={this.decrementMult}
          incrementMod={this.incrementMod}
          decrementMod={this.decrementMod}
          updateMult={this.updateMult}
          updateMod={this.updateMod}
          state={this.state}
        />
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('App Did Update');
  }
}

export default App;
// updateState() {
//   this.state = setState();
// }
//need a func to replace what we want setState to look like
//get components set up and come back to state
//easier with more to visualize and where state will change
//what components will be able to pass information
