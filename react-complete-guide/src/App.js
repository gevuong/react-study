import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// extend Component class from React library
class App extends Component {
  // state is a reserved word to manage data inside a component, whereas props 
  // are set and passed externally. 
  state = {
    persons: [
      { id: '1', name: 'George', age: 29 }, // pass age number instead of string
      { id: '2', name: 'Angela', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
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

  nameChangeHandler = (event, id) => {
    // function gets executed on every element in array
    const personIdx = this.state.persons.findIndex(p => p.id === id )

    // create a new object with all its properties using spread operator
    const person = {...this.state.persons[personIdx]}
    // alternative approach below
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    // update one element without mutating the state
    const persons = [...this.state.persons]
    persons[personIdx] = person
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = idx => {
    // arrays and objects are reference types. It is important to update
    // state immutably by using slice() or the spread operator to create a 
    // copy of the array of objects.
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(idx, 1)
    // 
    this.setState({persons: persons})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, idx) => {
            return <Person 
              key={person.id}
              name={person.name} 
              age={person.age}
              // change={this.nameChangeHandler.bind(this, person.id)}
              change={(event) => this.nameChangeHandler(event, person.id)}
              // both methods below work the same if you're passing in a argument
              // click={this.deletePersonHandler.bind(this, idx)}
              click={() => this.deletePersonHandler(idx)}
              />
          })}
        </div>
      )
    }

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
          // onClick={() => this.switchNameHandler('George!!')}>
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons} 
      </div>
    );
  }
}

export default App;
