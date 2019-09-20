import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

// Note: component was originally a functional component. Reason for 
// change to a class is to add componentWillUpdate for debugging purposes.
class OrderSummary extends Component {
    UNSAFE_componentWillUpdate() {
        console.log('OrderSummary will update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingredientKey => {
                // set inline styling to a JS object. The outer {} is for
                // marking dynamic entries, and the inner {} is a JS object
                return (
                    <li key={ingredientKey}>
                        <span style={{textTransform: 'capitalize'}}>
                            {ingredientKey}</span>: {this.props.ingredients[ingredientKey]
                    }</li>
                );
            })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button 
                    buttonType={"Danger"} 
                    clicked={this.props.purchaseCanceled}>CANCEL
                </Button>
                <Button 
                    buttonType={"Success"}
                    clicked={this.props.purchaseContinued}>CONTINUE
                </Button>
            </Aux>
        )
    }
}

export default OrderSummary;