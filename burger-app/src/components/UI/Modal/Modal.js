import React from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const modal = (props) => (
    <Aux>
        <Backdrop 
            show={props.show} 
            clicked={props.modalClosed}>
        </Backdrop>
        <div 
            className={classes.Modal}
            // "vh" is a special unit referring to the viewport height, which
            // will cause modal to slide out of the screen.
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
)


export default modal;