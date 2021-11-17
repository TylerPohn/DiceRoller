import React, { Component } from 'react';
import Row from './Row';
import Result from './Result'
class Stack extends Component {
  render() {
    const sides = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20'];
    const i = 0;
    console.log(123, this.props.goblin);
    console.log(456, this.props.state);
    return (
      <div>
        <Row goblin={this.props.goblin} state={this.props.state} />
        <Result goblin={this.props.goblin} state={this.props.state} />

        {/* <Row />
        <Row /> */}
      </div>
    );
  }
}

export default Stack;
