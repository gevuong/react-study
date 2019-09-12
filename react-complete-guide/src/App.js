import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// extend Component class from React library
class App extends Component {
  // state is a reserved word to manage data inside a component, whereas props are set and passed externally. 
  state = {
    persons: [
      { name: 'George', age: 29 }, // pass number for age instead of string
      { name: 'Angela', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  // need to use fat arrow functions for "this" to work in handler.
  // "this" will refer to the class App at runtime, and is only used in class-based components, not functional components.
  switchNameHandler = () => {
    console.log('You clicked me!')
    // we haven't defined setState function, because we extended Component from
    // the react library, the Component object has a setState function
    this.setState({
      persons: [
        { name: 'Vuong', age: 29 }, // pass number for age instead of string
        { name: 'Angela', age: 29}, 
        { name: 'Stephanie', age: 5}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        {/* pass onClick handler function as a reference, do not invoke with ()*/}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Things in Common: From California </Person>
        < Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
