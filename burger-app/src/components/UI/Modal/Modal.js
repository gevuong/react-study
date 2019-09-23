import React, { Component } from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

// const modal = (props) => (
class Modal extends Component {
    // method is used to let React know whether this component needs to be 
    // updated. We only need to update this component if props.show changes.
    // Otherwise, don't unnecessarily re-render Modal.
    // Method is invoked before rendering when new props or state are being 
    // received. This method is not called for the initial render. 
    // Method only exists as a performance optimization.
    //
    // update component if current and previous props.children are different
    shouldComponentUpdate(nextProps, _) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    // method is invoked before rendering when new props or state are being
    // received. Use this as an opportunity to perform preparation before
    // an update occurs. This method is not called for the initial render,
    // and if shouldComponentUpdate returns false.
    UNSAFE_componentWillUpdate() {
        console.log('[Modal] will update')
    }

    render() {
        // console.log("children", this.props.children)
        return (
            <Aux>
                <Backdrop 
                    show={this.props.show} 
                    clicked={this.props.modalClosed}>
                </Backdrop>
                <div 
                    className={classes.Modal}
                    // "vh" is a special unit referring to the viewport height, which
                    // will cause modal to slide out of the screen.
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}


export default Modal;