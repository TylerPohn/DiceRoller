import React, { Component } from 'react';
import Row from './Row';
import Result from './Result';
class Stack extends Component {
  render() {
    return (
      <div>
        <Row
          incrementMult={this.props.incrementMult}
          decrementMult={this.props.decrementMult}
          incrementMod={this.props.incrementMod}
          decrementMod={this.props.decrementMod}
          updateMult={this.props.updateMult}
          updateMod={this.props.updateMod}
          state={this.props.state}
        />
        <Row
          incrementMult={this.props.incrementMult}
          decrementMult={this.props.decrementMult}
          incrementMod={this.props.incrementMod}
          decrementMod={this.props.decrementMod}
          updateMult={this.props.updateMult}
          updateMod={this.props.updateMod}
          state={this.props.state}
        />
        <Result
          updateOutcome={this.props.updateOutcome}
          state={this.props.state}
        />
        {/* <Count state={this.props.state} /> */}
      </div>
    );
  }
}

export default Stack;
