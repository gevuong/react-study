import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button 
        // buttonType will either be "Danger" or "Success"
        className={[classes.Button, classes[props.buttonType]].join(' ')} 
        onClick={props.clicked}>{props.children}
    </button>
)

export default button;