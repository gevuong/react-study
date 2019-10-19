import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ userIngredients, setUserIngredients ] = useState([])

  const addIngredientHandler = ingredient => {
    fetch('https://react-hooks-da136.firebaseio.com/ingredients.json', {
      method: 'POST',
      // axios converts JS object or array to JSON format,
      // and adds headers by default to inform database that json is
      // incoming
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }   
    }).then(response => {
      return response.json() // converts JSON to normal JS code
    }).then(responseData => {
      // responseData contains an auto generated, unique ID from firebase
      setUserIngredients(prevIngredients => (
        [...prevIngredients, {
          id: responseData.name, ...ingredient
        }]
      ))
    })
  }

  const removeIngredientHandler = ingredientId => { 
    setUserIngredients(prevIngredients => (
      prevIngredients.filter(ingredient => ( 
        ingredient.id !== ingredientId 
      ))
    ))
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList 
          onRemoveItem={removeIngredientHandler}
          ingredients={userIngredients}
        />
      </section>
    </div>
  );
}

export default Ingredients;
