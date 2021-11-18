import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import rollN from './rollN';
import './styles.css';

class Result extends Component {
  //anytime you pass something down, its CALLED PROPS

  render() {
    // put render logic here
    let alpha1 = 0;
    let alpha2 = 0;
    let alpha3 = 0;
    let alpha4 = 0;
    let alpha5 = 0;
    let alpha6 = 0;
    let beta1 = 0;
    let beta2 = 0;
    let beta3 = 0;
    let beta4 = 0;
    let beta5 = 0;
    let beta6 = 0;
    const { outcome } = this.props.state;
    console.log('GOBLIN', this.props.state.row1);

    const mult1 = this.props.state.row1.multiplier;
    const mult2 = this.props.state.row2.multiplier;
    const mult3 = this.props.state.row3.multiplier;
    const mult4 = this.props.state.row4.multiplier;
    const mult5 = this.props.state.row5.multiplier;
    const mult6 = this.props.state.row6.multiplier;
    const mod1 = this.props.state.row1.modifier;
    const mod2 = this.props.state.row2.modifier;
    const mod3 = this.props.state.row3.modifier;
    const mod4 = this.props.state.row4.modifier;
    const mod5 = this.props.state.row5.modifier;
    const mod6 = this.props.state.row6.modifier;
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
            for (let i = 0; i < mult1; i++) {
              beta1 += rollN(4);
            }
            alpha1 = beta1 + mod1;

            for (let i = 0; i < mult2; i++) {
              beta2 += rollN(6);
            }
            alpha2 = beta2 + mod2;

            for (let i = 0; i < mult3; i++) {
              beta3 += rollN(8);
            }
            alpha3 = beta3 + mod3;

            for (let i = 0; i < mult4; i++) {
              beta4 += rollN(10);
            }
            alpha4 = beta4 + mod4;

            for (let i = 0; i < mult5; i++) {
              beta5 += rollN(12);
            }
            alpha5 = beta5 + mod5;

            for (let i = 0; i < mult6; i++) {
              beta6 += rollN(20);
            }
            alpha6 = beta6 + mod6;

            const alphaOmega =
              alpha1 + alpha2 + alpha3 + alpha4 + alpha5 + alpha6;
            this.props.updateOutcome(alphaOmega);
            // document.querySelector('.outCome').appendChild(1);
          }}
        >
          <h2 class='roll'>ROLL</h2>
        </button>
        <div class='spacer'></div>
        <h2 class='outCome'>Outcome: {outcome}</h2>
      </div>
    );
  }
}

export default Result;
