import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    // need to pass in updated ingredients, not a copy from state
    updatePurchaseState = (ingredients) => {
        // create copy of ingredients
        // const ingredients = {...this.state.ingredients}
        // create an array of string keys
        const sum = Object.keys(ingredients)
            .map(ingredientKey => {
                return ingredients[ingredientKey]
            })
            // sum is the constantly updated current sum, 
            // el is a number from the above returned value
            .reduce((sum, el) => {
                return sum + el;
            }, 0)
        
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        // create new object containing immutable state using spread operator
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedCount
        // update price
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        this.updatePurchaseState(updatedIngredients)
    }


    removeIngredientHandler = (type) => {
        const currentCount = this.state.ingredients[type]
        if (currentCount >= 1) {
            const currentPrice = this.state.totalPrice
            const updatedCount = currentCount - 1
            // create immutable state object
            const updatedIngredients = {...this.state.ingredients}
            updatedIngredients[type] = updatedCount
            // update price
            const priceSubtraction = INGREDIENT_PRICES[type]
            const newPrice = currentPrice - priceSubtraction

            this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
            this.updatePurchaseState(updatedIngredients)
        }
    }

    render () {
        // create immutable copy {salad: true, meat: false, ...}
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;