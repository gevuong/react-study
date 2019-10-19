import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [ userIngredients, setUserIngredients ] = useState([])

  const addIngredientHandler = ingredient => {
    setUserIngredients(prevIngredients => (
      [...prevIngredients, {
        id: Math.random().toString(), ...ingredient}]
    ))
  }

  const removeIngredientHandler = ingredientId => { 
    setUserIngredients(
      userIngredients.filter(ingredient => ( 
        ingredient.id !== ingredientId 
      ))
    )
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
