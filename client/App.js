import React, { Component } from 'react';
import './styles.css';
import { render } from 'react-dom';
import Stack from './Stack';

// function getInitialState() {
//   return {
//     rows: [
//       [0, 0],
//       [0, 0],
//       [0, 0],
//       [0, 0],
//       [0, 0],
//       [0, 0],
//     ],
//   };
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        [0, 0],
        // [0, 0],
        // [0, 0],
        // [0, 0],
        // [0, 0],
        // [0, 0],
      ],
    };
  }

  // updateState(){
  //   this.state = setState();
  // }
  //need a func to replace what we want setState to look like
  //get components set up and come back to state
  //easier with more to visualize and where state will change
  //what components will be able to pass information
  render() {
    const goblin = 'gobgobgob';
    //in order to make goblin a prop that's availbale to stack...
    //when i render this instance of stack, i must pass prop down
    console.log(999, this.state);
    return (
      <div>
        {/* <h1 className='blue'>Rockin' and a rollin'</h1> */}
        {/* //to create a stack instance that has access to goblin, and also has the label goblin */}
        <Stack goblin={goblin} state={this.state} />
      </div>
    );
  }
}

export default App;
