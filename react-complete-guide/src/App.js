import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// extend Component class from React library
class App extends Component {
  // state is a reserved word to manage data inside a component, whereas props 
  // are set and passed externally. 
  state = {
    persons: [
      { name: 'George', age: 29 }, // pass number for age instead of string
      { name: 'Angela', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  // need to use fat arrow functions for "this" to work in handler.
  // "this" will refer to the class App at runtime, and is only used in 
  // class-based components, not functional components.
  switchNameHandler = (newName) => {
    console.log('You clicked me!')
    // we haven't defined setState function, because we extended Component from
    // the react library, the Component object has a setState function
    this.setState({
      persons: [
        { name: newName, age: 29 }, // pass number for age instead of string
        { name: 'Angela', age: 29 }, 
        { name: 'Stephanie', age: 5 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    // console.log(event.target.value)
    this.setState({
      persons: [
        { name: 'George', age: 29 }, // pass number for age instead of string
        { name: 'Angela', age: 29 }, 
        { name: event.target.value, age: 5 }       
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working.</p>
        {/* arrow function implicitly adds a return keyword if function is 
        written in one line. The alternative is to wrap return value in {} 
        and write a normal function. The anonymous function will return the 
        function call, and is not executed immediately. However this can be 
        inefficient, use bind syntax instead.*/}
        <button
          style={style}
          onClick={() => this.switchNameHandler('George!!')}>
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}>
          Things in Common: From California
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          change={this.nameChangeHandler}/>
      </div>
    );
  }
}

export default App;
