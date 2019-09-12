import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// extend Component class from React library
class App extends Component {
  // state is a reserved word to manage data inside a component, whereas props are set and passed externally. 
  state = {
    person: [
      { name: 'George', age: 29 }, // pass number for age instead of string
      { name: 'Angela', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Things in Common: From California </Person>
        < Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
