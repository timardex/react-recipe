import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postRecipe, putRecipe, getRecipes } from '../../store/actions';

import Form from './Form';
import Recipe from './Recipe';

import './styles.scss';

const CreateEditRecipe = () => {
  const dispatch = useDispatch();
  const recipeToEdit = useSelector(state => state.recipe);

  const checkUndefined = useCallback(() => {
    return typeof recipeToEdit !== 'undefined';
  }, [recipeToEdit]);

  const [recipe, setupRecipe] = useState({
    id: null,
    name: '',
    ingredient: '',
    ingredients: [],
  });

  useEffect(() => {
    setupRecipe({
      id: checkUndefined() ? recipeToEdit.id : null,
      name: checkUndefined() ? recipeToEdit.name : '',
      ingredient: '',
      ingredients: checkUndefined() ? recipeToEdit.ingredients : [],
    });
  }, [recipeToEdit, checkUndefined]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setupRecipe(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const disableBtn = () => {
    return recipe.name === '' || recipe.ingredients.length === 0 || recipe.ingredient !== '';
  }

  const handleClick = (type, item) => {
    setupRecipe({
      id: type === 'edit' ? recipe.id : null,
      name: recipe.name,
      ingredient: type === 'delete'
        ? recipe.ingredient
        : type === 'edit'
        ? recipe.ingredients.find(el => el === item)
        : '',
      ingredients: type === 'delete' || type === 'edit'
        ? recipe.ingredients.filter(el => el !== item)
        : [...recipe.ingredients, recipe.ingredient],
    });
  }

  const saveRecipe = () => {
    let payload = {
      name: recipe.name,
      ingredients: recipe.ingredients,
    };

    if (checkUndefined()) {
      dispatch(putRecipe(payload, recipeToEdit.id));
    } else {
      dispatch(postRecipe(payload));
    }
    
    cancelRecipe();
  };

  const cancelRecipe = () => {
    setupRecipe({
      id: null,
      name: '',
      ingredient: '',
      ingredients: [],
    });
    dispatch(getRecipes());
  };

  return (
    <div id="create-recipe">
      <Form
        recipe={recipe}
        handleInputChange={handleInputChange}
        handleClick={handleClick}
      />
      <Recipe 
        recipe={recipe}
        handleClick={handleClick}
      />
      <button
        onClick={e => disableBtn() ? null : saveRecipe()}
        disabled={disableBtn()}
        className="save-btn">Save Recipe</button>
        
      {!disableBtn() && <button
        onClick={e => cancelRecipe()}
        className="cancel-btn">Cancel Recipe</button>}
    </div>
  );
};

export default CreateEditRecipe;