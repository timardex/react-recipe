import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postRecipe } from '../../store/actions';

import Form from './Form';
import Recipe from './Recipe';

const CreateRecipe = () => {
  const dispatch = useDispatch();

  const [recipe, setupRecipe] = useState({
    name: '',
    ingredient: '',
  });

  const [ingredients, getIngredients] = useState([]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setupRecipe(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addIngredients = () => {
    getIngredients([...ingredients, recipe.ingredient]);
    setupRecipe({
      name: recipe.name,
      ingredient: '',
    });
  };

  const deleteIngredient = (item) => {
    getIngredients(ingredients.filter(el => el !== item));
  };

  const saveRecipe = () => {
    const payload = {
      name: recipe.name,
      ingredients,
    };
    setupRecipe({
      name: '',
      ingredient: '',
    });
    getIngredients([]);
    dispatch(postRecipe(payload));
  }

  return (
    <div id="create-recipes">
      <Form
        recipe={recipe}
        onChange={handleInputChange}
        onClick={addIngredients}
      />
      <Recipe 
        recipe={recipe}
        ingredients={ingredients}
        onClick={deleteIngredient}
      />
      <button onClick={e => saveRecipe()} disabled={recipe.name === '' || ingredients.length === 0}>Save Recipe</button>
    </div>
  );
};

export default CreateRecipe;