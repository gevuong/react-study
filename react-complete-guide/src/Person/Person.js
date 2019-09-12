import React from 'react';

// functional component is a function that simply returns jsx
const person = ( props ) => {
    // use {} braces to output dynamic content as part of our JSX content
    // children is a reserved word, which refers to any elements between the opening and closing tag of a component.
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;