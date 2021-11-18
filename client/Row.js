import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import rollN from './rollN';
import './styles.css';
// import Count from './Count';

class Row extends Component {
  //anytime you pass something down, its CALLED PROPS

  render() {
    // put render logic here
    const { multiplier, modifier, outcome } = this.props.state;

    return (
      <div
        class='container'
        state={this.props.state}
        // style={styles.container}
      >
        <h2 class='dice' state={this.props.state}>
          {'D20'}
          {/* <img src={require('./d20.jpeg')}></img> */}
        </h2>

        <h2 class='inner' state={this.props.state}>
          <div class='multMod' state={this.props.state}>
            Multiplier (*):
            <div> {multiplier}</div>
            <button
              state={this.props.state}
              onClick={() => this.props.incrementMult()}
            >
              +
            </button>
            <button
              state={this.props.state}
              onClick={() => this.props.decrementMult()}
            >
              -
            </button>
          </div>
        </h2>
        
        <h2 class='inner' state={this.props.state}>
          <div class='multMod' state={this.props.state}>
            Modifier (+):
            <div> {modifier}</div>
            <button
              state={this.props.state}
              onClick={() => this.props.incrementMod()}
            >
              +
            </button>
            <button
              state={this.props.state}
              onClick={() => this.props.decrementMod()}
            >
              -
            </button>
          </div>
        </h2>
      </div>
    );
  }
}

const styles = {
  container: {
    border: '10px solid black',
    height: 120,
    width: '100%',
    flex: 1,
  },
};

export default Row;
