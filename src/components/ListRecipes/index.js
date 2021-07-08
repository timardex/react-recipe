import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import './styles.scss';

import { getRecipes } from '../../store/actions/getRecipes';
import { deleteRecipe } from '../../store/actions/deleteRecipe';

const ListRecipes = (props) => {
  const { recipes, apiResponse, getRecipes, deleteRecipe } = props;

  useEffect(() => {
    getRecipes();
  }, [getRecipes, apiResponse]);

  return (
    <div id="list-recipes">
      <ul className="list">
        {typeof recipes !== 'undefined' && recipes.map((item, ) => {
          return <li key={item.id} className="list-item">
                  <button onClick={e => deleteRecipe(item.id)}>X</button>
                  <span>{item.name}</span>
                  <ul>
                    {item.ingredients.length > 0 && item.ingredients.map((ing, index) => {
                      return <li key={index}>{ing}</li>
                    })}
                  </ul>
                </li>
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    apiResponse: state.apiResponse,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getRecipes: () => {
      dispatch(getRecipes());
    },
    deleteRecipe: (payload) => {
      dispatch(deleteRecipe(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRecipes);
