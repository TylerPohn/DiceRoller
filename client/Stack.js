import React, { Component } from 'react';
import Row from './Row';
import Result from './Result';
import Count from './Count';
class Stack extends Component {
  render() {
    return (
      <div>
        <Row
          increment={this.increment}
          decrement={this.decrement}
          updateMult={this.updateMult}
          updateMod={this.updateMod}
          state={this.props.state}
        />

        <Result
          updateOutcome={this.props.updateOutcome}
          state={this.props.state}
        />
        <Count state={this.props.state} />
      </div>
    );
  }
}

export default Stack;
