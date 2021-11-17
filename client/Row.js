import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import rollN from './rollN';
import './styles.css';

class Row extends Component {
  //anytime you pass something down, its CALLED PROPS

  render() {
    // put render logic here
    console.log('this.props:', this.props);

    console.log(111, 'this.props.state:', this.props.state['rows']);
    // console.log('sides', sides);

    return (
      <div
        class='container'
        goblin={this.props.goblin}
        state={this.props.state}
        // style={styles.container}
      >
        <h2 class='inner' goblin={this.props.goblin} state={this.props.state}>
          {'D20'}
        </h2>
        <h2 class='inner' goblin={this.props.goblin} state={this.props.state}>
          <div class='multMod'>Multiplier: (*)</div>
          {/* {this.props.state.rows[0][0]} */}
          <form>
            <label>
              <input
                type={'number'}
                min={0}
                max={100}
                defaultValue={0}
                // onChange={(e) => setName(e.target.value)}
                onClick={(e) => {
                  e.target.value;
                  this.setState(this.props.state.rows);
                }}
              ></input>
            </label>
          </form>
        </h2>
        <h2 class='inner' goblin={this.props.goblin} state={this.props.state}>
          <div class='multMod'>Modifier: (+)</div>
          {/* <div>{this.props.state.rows[0][1]}</div> */}
          <form>
            <label>
              <input
                type={'number'}
                min={0}
                max={100}
                defaultValue={0}
                // onChange={(e) => setName(e.target.value)}
                onClick={(e) => {
                  e.target.value;
                  this.setState(this.props.state.rows);
                }}
              ></input>
            </label>
          </form>
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
    height: 200,
    width: '100%',
    flex: 1,
  },
};

export default Row;
