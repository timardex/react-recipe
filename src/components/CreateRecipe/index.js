import React, { useState } from 'react';
import {connect} from 'react-redux';

import {postRecipe} from '../../store/actions/postRecipe';

import Form from './Form';
import Recipe from './Recipe';

const CreateRecipe = (props) => {
  const { postRecipe } = props;

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
    postRecipe(payload);
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
      <button onClick={e => saveRecipe()}>Save Recipe</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    postRecipe: (payload) => {
      dispatch(postRecipe(payload));
    },
  };
};

export default connect(null, mapDispatchToProps)(CreateRecipe);