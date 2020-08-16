import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [ingredient, addNewIngredient] = useState([]);
  const [id, setId] = useState(0);

  const addIngredient = () => {
    if(name.length > 0 && amount > 0) {
      addNewIngredient([
        ...ingredient,
        {
          'name': name,
          'amount': amount,
          'id': id
        }
      ])
      setId(prevId => prevId + 1);
    }
  }

  const deleteElement = (e) => {

    let modifiedIngredients = [];

    modifiedIngredients = ingredient.filter((list) => {
      if(list.id != e.target.id) {
        return list;
      }
    });

    addNewIngredient(modifiedIngredients);

  }

  const ingredientList = (list) => {
    return(
      <div key={list.id} id={list.id} className="filter-container" onClick={(e) => deleteElement(e)}>
        <div>
          {list.name}
        </div>
        <div>
          {list.amount}
        </div>
      </div>
    )
  }
  
  const renderIngredientsInCart = () => {
    if(ingredient.length > 0) {
      return(
        <React.Fragment>
          <p>
            Loaded Ingredients
          </p>
          {
            ingredient.map((list) => {
              return ingredientList(list)
            })
          }
        </React.Fragment>
      )
    }
  }

  return (
    <div className="parent-container">
      <div className="ingredients-parent-container">
            <div className="input-container">
              <div className="input-field-container">
                <div>
                  Name
                </div>
                <div className="input-text">
                  <input type="text" onChange={(e) => setName(e.target.value)}></input>
                </div>
              </div>
              <div className="input-field-container">
                <div>
                  Amount
                </div>
                <div className="input-text">
                  <input type="text" onChange={(e) => setAmount(e.target.value)}></input>
                </div>
              </div>
              <div className="button-container">
                <div className="button" onClick={() => addIngredient()}>
                  Add ingredients
                </div>
              </div>
            </div>
            <div className="filter-container">
              <div className="title-container display-flex-center-start">
                Filter By title
              </div>
              <div className="title-container">
                <input type="text">

                </input>
              </div>
            </div>
            <div className="ingredient-list-container">
              {renderIngredientsInCart()}
            </div>
      </div>
    </div>
  );
}

export default App;
