import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import rollN from './rollN';
import './styles.css';
//import the image
class Row extends Component {
  //anytime you pass something down, its CALLED PROPS

  render() {
    // put render logic here
    // REFACTORING NEEDED BELOW
    //create a label for row1 property on state
    if (this.props.name == 'row1') {
      this.row = this.props.state.row1;
    } else if (this.props.name == 'row2') {
      this.row = this.props.state.row2;
    } else if (this.props.name == 'row3') {
      this.row = this.props.state.row3;
    } else if (this.props.name == 'row4') {
      this.row = this.props.state.row4;
    } else if (this.props.name == 'row5') {
      this.row = this.props.state.row5;
    } else if (this.props.name == 'row6') {
      this.row = this.props.state.row6;
    } else {
      console.log('Houston, we have a problem');
    }
    console.log('the current row is: ', this.row);
    const row1 = this.props.state.row1;
    const { outcome } = this.props.state;

    return (
      <div
        class='container'
        state={this.props.state}
        // style={styles.container}
      >
        <h2 class='dice' state={this.props.state}>
          {this.row.dice}
          {/* <img src={require('./d20.jpeg')}></img> */}
        </h2>

        <h2 class='inner' state={this.props.state}>
          <div class='multMod' state={this.props.state}>
            Multiplier (*):
            <div> {this.row.multiplier}</div>
            <button
              state={this.props.state}
              onClick={() =>
                this.props.decrementMult(
                  this.row.multiplier,
                  this.props.name,
                  this.row
                )
              }
            >
              <h2>-</h2>
            </button>
            {/* REFACTORING NEEDED BELOW - maybe incrementMult should take an arg row1 */}
            <button
              state={this.props.state}
              onClick={() =>
                this.props.incrementMult(
                  this.row.multiplier,
                  this.props.name,
                  this.row
                )
              }
            >
              <h2>+</h2>
            </button>
          </div>
        </h2>

        <h2 class='inner' state={this.props.state}>
          <div class='multMod' state={this.props.state}>
            Modifier (+):
            <div> {this.row.modifier}</div>
            <button
              state={this.props.state}
              onClick={() =>
                this.props.decrementMod(
                  this.row.modifier,
                  this.props.name,
                  this.row
                )
              }
            >
              <h2>-</h2>
            </button>
            <button
              state={this.props.state}
              onClick={() =>
                this.props.incrementMod(
                  this.row.modifier,
                  this.props.name,
                  this.row
                )
              }
            >
              <h2>+</h2>
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
