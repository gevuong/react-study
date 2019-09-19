import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            // set inline styling to a JS object. The outer {} is for
            // marking dynamic entries, and the inner {} is a JS object
            return (
                <li key={ingredientKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {ingredientKey}</span>: {props.ingredients[ingredientKey]
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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button 
                buttonType={"Danger"} 
                clicked={props.purchaseCanceled}>CANCEL
            </Button>
            <Button 
                buttonType={"Success"}
                clicked={props.purchaseContinued}>CONTINUE
            </Button>
        </Aux>
    )
}

export default orderSummary