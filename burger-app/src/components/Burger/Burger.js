import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // extract keys from given object and returns an array of those keys
    let transformedIngredients = Object.keys(props.ingredients)
        // ingredientKey values are salad, bacon, meat, etc
        .map((ingredientKey) => {
            // create array of size based on number of an ingredient
            return [...Array(props.ingredients[ingredientKey])]
                .map((_, i) => {
                // create unique key for each element
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
            })
        })
        // flatten array
        .reduce((previous, current) => {
            return previous.concat(current)
        }, [])
    
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
                {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;