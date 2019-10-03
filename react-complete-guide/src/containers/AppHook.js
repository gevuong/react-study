import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// functional component that can manage state and return jsx
const appHook = () => {
  // array destructuring, useState returns a stateful value
  // and a function to update it. 
  const [personsState, setPersonsState] = useState({
      persons: [
      { name: 'George', age: 29 }, // pass number for age instead of string
      { name: 'Angela', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    // otherState: "some other value"  
  })

  const [otherState, setOtherState] = useState({otherState: "some other value"})

  const switchNameHandler = () => {
    console.log('You clicked me!')
    console.log(personsState, otherState)
    // we haven't defined setState function, because we extended Component from
    // the react library, the Component object has a setState function
    setPersonsState({
      persons: [
        { name: 'Vuong', age: 29 }, // pass number for age instead of string
        { name: 'Angela', age: 25}, 
        { name: 'Stephanie', age: 5}
      ],
    })
    
    setOtherState({
      otherState: "new other value"
    })
    
    console.log(personsState, otherState)
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working.</p>
      {/* pass onClick handler function as a reference, do not invoke with ()*/}
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Things in Common: From California</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  )
}

export default appHook
