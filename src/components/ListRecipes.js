import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import { getRecipes } from '../store/actions/getRecipes';

const ListRecipes = (props) => {
  const { recipes, apiResponse, getRecipes } = props;

  useEffect(() => {
    getRecipes();
  }, [getRecipes, apiResponse]);

  return (
    <div id="list-recipes">
      <ul>
        {typeof recipes !== 'undefined' && recipes.map((item, ) => {
          return <li key={item.id}>{item.name}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRecipes);