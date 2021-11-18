// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import './styles.css';

// class Count extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 4,
//     };
//     this.increment = () => this.setState({ counter: this.state.counter + 1 });
//     this.decrement = () => this.setState({ counter: this.state.counter - 1 });
//   }
//   updateState() {
//     this.state = setState();
//   }
//   //need a func to replace what we want setState to look like
//   //get components set up and come back to state
//   //easier with more to visualize and where state will change
//   //what components will be able to pass information
//   componentDidMount() {
//     console.log('Componenet Did Mount');
//   }

//   render() {
//     //in order to make goblin a prop that's availbale to stack...
//     //when i render this instance of stack, i must pass prop down
//     return (
//       <div>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//         <div className='counter'>{this.state.counter}</div>
//       </div>
//     );
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('I am the count');
//   }
// }

// export default Count;
