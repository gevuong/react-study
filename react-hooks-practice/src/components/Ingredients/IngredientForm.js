import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

// memo is used to prevent unnecessary re-renders
const IngredientForm = React.memo(props => {
  // these states survive re-render cycles, and so survives re-renders of 
  // other states. Title and amount are managed independently. 
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const submitHandler = event => {
    event.preventDefault();
    props.onAddIngredient({ title: enteredTitle, amount: enteredAmount })
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input 
              type="text"
              id="title"
              value={enteredTitle} 
              // event is the change event, target is the input field, 
              // value holds the value user enters.
              onChange={event => {setEnteredTitle(event.target.value)}} 
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input 
              type="number" 
              id="amount" 
              value={enteredAmount} 
              // event is the change event, target is the input field, 
              // value holds the value user enters.
              onChange={event => {setEnteredAmount(event.target.value)}}
            />
          </div>
          <div className="ingredient-form__actions">
            {/* button of type submit triggers onSubmit handler in form */}
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
