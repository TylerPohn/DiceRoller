import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import rollN from './rollN';
import './styles.css';
import Count from './Count';

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
          <div class='multMod'>
            Multiplier: (*)
            <div>{multiplier}</div>
            <button onClick={this.props.increment}>+</button>
          </div>
        </h2>

        <h2 class='inner' state={this.props.state}>
          <div class='multMod'>
            Modifier: (+)
            <Count state={this.props.state} />
          </div>
        </h2>

        {/* <div state={this.state}>{this.props.state}</div>
        <h2>Multiplier: {('multipler', rollN(1, 20))}</h2>
        <h2>Multiplier: {('multipler', rollN(1, 20))}</h2> */}
        {/* <img src={this.props.RowUrl} /> */}
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
