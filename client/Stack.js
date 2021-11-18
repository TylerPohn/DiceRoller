import React, { Component } from 'react';
import Row from './Row';
import Result from './Result';
class Stack extends Component {
  render() {
    //REFACTORING NEEDED BELOW: add a unique id property to each row e.g. row1, row2
    //these props are accessible in state (ex. this.props.state.row1)
    return (
      <div>
        <Row
          name='row1'
          incrementMult={this.props.incrementMult}
          decrementMult={this.props.decrementMult}
          incrementMod={this.props.incrementMod}
          decrementMod={this.props.decrementMod}
          updateRowMult={this.props.updateRowMult}
          updateRowMod={this.props.updateRowMod}
          updateMod={this.props.updateMod}
          state={this.props.state}
        />
        <Row
          name='row2'
          incrementMult={this.props.incrementMult}
          decrementMult={this.props.decrementMult}
          incrementMod={this.props.incrementMod}
          decrementMod={this.props.decrementMod}
          updateRowMult={this.props.updateRowMult}
          updateRowMod={this.props.updateRowMod}
          updateMod={this.props.updateMod}
          state={this.props.state}
        />
        <Row
          name='row3'
          incrementMult={this.props.incrementMult}
          decrementMult={this.props.decrementMult}
          incrementMod={this.props.incrementMod}
          decrementMod={this.props.decrementMod}
          updateRowMult={this.props.updateRowMult}
          updateRowMod={this.props.updateRowMod}
          updateMod={this.props.updateMod}
          state={this.props.state}
        />
        <Row
          name='row4'
          incrementMult={this.props.incrementMult}
          decrementMult={this.props.decrementMult}
          incrementMod={this.props.incrementMod}
          decrementMod={this.props.decrementMod}
          updateRowMult={this.props.updateRowMult}
          updateRowMod={this.props.updateRowMod}
          updateMod={this.props.updateMod}
          state={this.props.state}
        />
        <Row
          name='row5'
          incrementMult={this.props.incrementMult}
          decrementMult={this.props.decrementMult}
          incrementMod={this.props.incrementMod}
          decrementMod={this.props.decrementMod}
          updateRowMult={this.props.updateRowMult}
          updateRowMod={this.props.updateRowMod}
          updateMod={this.props.updateMod}
          state={this.props.state}
        />
        <Row
          name='row6'
          incrementMult={this.props.incrementMult}
          decrementMult={this.props.decrementMult}
          incrementMod={this.props.incrementMod}
          decrementMod={this.props.decrementMod}
          updateRowMult={this.props.updateRowMult}
          updateRowMod={this.props.updateRowMod}
          updateMod={this.props.updateMod}
          state={this.props.state}
        />
        <Result
          updateOutcome={this.props.updateOutcome}
          state={this.props.state}
        />
      </div>
    );
  }
}

export default Stack;
