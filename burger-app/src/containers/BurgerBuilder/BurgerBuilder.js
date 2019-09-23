import React, { Component } from 'react';
import axiosInstance from '../../axios-orders';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

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
        purchasable: false,
        purchasing: false,
        loading: false
    }

    // need to pass in updated ingredients, not a copy from state
    updatePurchaseState = (ingredients) => {
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

    // note: using this syntax to write methods: purchaseHandler() {}, does
    // not have reference to the context of "this". Using fat arrow function
    // syntax contains the state, or the context of "this".
    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true})

        // alert('You continue!')
        const order = {
            ingredients: this.state.ingredients,
            // for production app, price should be calculated on the server 
            // to make sure user isn't manipulating the price via code.
            price: this.state.totalPrice,
            customer: {
                name: 'George',
                address: {
                    street: '123 Fake St',
                    zipCode: 12345,
                    country: 'USA'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axiosInstance.post('/orders.json', order)
            .then(response => {
                console.log(response)
                this.setState({ purchasing: false, loading: false })

            })
            .catch(error => {
                console.log(error)
                this.setState({ purchasing: false, loading: false })
            })
    }

    render () {
        // create immutable copy {salad: true, meat: false, ...}
        const disabledInfo = {...this.state.ingredients}
        // loop through each key in state and check if value is 0.
        // if ingredient is 0, then button to decrement is disabled.
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0
        }

        let orderSummary = <OrderSummary 
                ingredients={this.state.ingredients} 
                price={this.state.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />
        // load spinner
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        
        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;