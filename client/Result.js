import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import rollN from './rollN';
import './styles.css';

class Result extends Component {
  //anytime you pass something down, its CALLED PROPS

  render() {
    // put render logic here
    let alpha;

    return (
      <div
        class='bar'
        goblin={this.props.goblin}
        state={this.props.state}
        // style={styles.container}
      >
        <button
          class='button'
          onClick={(e) => {
            e.target.value;
            alpha = rollN(1, 20);

            console.log(alpha);
          }}
        >
          <h2 class='roll'>ROLL</h2>
          <h2 class='outCome' alpha={alpha}>
            Outcome: alpha
          </h2>
        </button>
      </div>
    );
  }
}

export default Result;
