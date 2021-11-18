import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import rollN from './rollN';
import './styles.css';

class Result extends Component {
  //anytime you pass something down, its CALLED PROPS

  render() {
    // put render logic here
    let alpha = 0;
    let beta = 0;
    const { outcome, multiplier, modifier } = this.props.state;
    console.log(outcome);

    return (
      <div
        class='flex-container'
        goblin={this.props.goblin}
        state={this.props.state}
        // style={styles.container}
      >
        <div class='spacer'></div>

        <button
          class='button'
          // onClick={this.handleClick}
          onClick={(e) => {
            // e.target.value;
            for (let i = 0; i < multiplier; i++) {
              beta += rollN(20);
            }

            alpha = beta + modifier;

            this.props.updateOutcome(alpha);
            console.log('alpha:', alpha);
            console.log('state.outcome:', outcome);
            // document.querySelector('.outCome').appendChild(1);
          }}
        >
          <h2 class='roll'>ROLL</h2>
        </button>
        <div class='spacer'></div>
        <h2 class='outCome' alpha={alpha}>
          Outcome: {outcome}
        </h2>
      </div>
    );
  }
}

export default Result;
