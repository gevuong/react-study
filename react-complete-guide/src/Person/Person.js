import React from 'react';
import './Person.css';

// functional component is a function that simply returns jsx
const person = ( props ) => {
    // use {} braces to output dynamic content as part of our JSX content
    // children is a reserved word, which refers to any elements between the opening and closing tag of a component.
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* add two-way binding, to see current state and updated state */}
            <input type="text" onChange={props.change} value={props.name}></input>
        </div>
    )
}

export default person;