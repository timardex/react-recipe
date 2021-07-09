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
    ingredients: [],
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setupRecipe(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const disableBtn = () => {
    return recipe.name === '' || recipe.ingredients.length === 0;
  }

  const addIngredients = () => {
    setupRecipe({
      name: recipe.name,
      ingredient: '',
      ingredients: [...recipe.ingredients, recipe.ingredient],
    });
  };

  const deleteIngredient = (item) => {
    setupRecipe({
      name: recipe.name,
      ingredient: recipe.ingredient,
      ingredients: recipe.ingredients.filter(el => el !== item)
    });
  };

  const saveRecipe = () => {
    const payload = {
      name: recipe.name,
      ingredients: recipe.ingredients,
    };

    dispatch(postRecipe(payload));

    setupRecipe({
      name: '',
      ingredient: '',
      ingredients: [],
    });
  }

  return (
    <div id="create-recipe">
      <Form
        recipe={recipe}
        onChange={handleInputChange}
        onClick={addIngredients}
      />
      <Recipe 
        recipe={recipe}
        ingredients={recipe.ingredients}
        onClick={deleteIngredient}
      />
      <button
        onClick={e => disableBtn() ? null : saveRecipe()}
        disabled={disableBtn()}>Save Recipe</button>
    </div>
  );
};

export default CreateRecipe;