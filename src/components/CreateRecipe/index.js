import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postRecipe, putRecipe } from '../../store/actions';

import Form from './Form';
import Recipe from './Recipe';

const CreateRecipe = () => {
  const dispatch = useDispatch();
  const recipeToEdit = useSelector(state => state.recipe);

  const [recipe, setupRecipe] = useState({
    id: null,
    name: '',
    ingredient: '',
    ingredients: [],
  });

  useEffect(() => {
    setupRecipe({
      id: typeof recipeToEdit !== 'undefined' ? recipeToEdit.id : null,
      name: typeof recipeToEdit !== 'undefined' ? recipeToEdit.name : '',
      ingredient: '',
      ingredients: typeof recipeToEdit !== 'undefined' ? recipeToEdit.ingredients : [],
    });
  }, [recipeToEdit]);

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
      id: null,
      name: recipe.name,
      ingredient: '',
      ingredients: [...recipe.ingredients, recipe.ingredient],
    });
  };

  const deleteIngredient = (item) => {
    setupRecipe({
      id: null,
      name: recipe.name,
      ingredient: recipe.ingredient,
      ingredients: recipe.ingredients.filter(el => el !== item)
    });
  };

  const editIngredient = (item) => {
    setupRecipe({
      id: recipe.id,
      name: recipe.name,
      ingredient: recipe.ingredients.find(el => el === item),
      ingredients: recipe.ingredients.filter(el => el !== item),
    });
  };

  const saveRecipe = () => {
    let payload = {
      name: recipe.name,
      ingredients: recipe.ingredients,
    };

    if (typeof recipeToEdit !== 'undefined') {
      const id = recipeToEdit.id;
      dispatch(putRecipe(payload, id));
    } else {
      dispatch(postRecipe(payload));
    }
    
    setupRecipe({
      id: null,
      name: '',
      ingredient: '',
      ingredients: [],
    });
  }

  return (
    <div id="create-recipe">
      <Form
        recipe={recipe}
        handleInputChange={handleInputChange}
        addIngredients={addIngredients}
      />
      <Recipe 
        recipe={recipe}
        ingredients={recipe.ingredients}
        deleteIngredient={deleteIngredient}
        editIngredient={editIngredient}
      />
      <button
        onClick={e => disableBtn() ? null : saveRecipe()}
        disabled={disableBtn()}>Save Recipe</button>
    </div>
  );
};

export default CreateRecipe;