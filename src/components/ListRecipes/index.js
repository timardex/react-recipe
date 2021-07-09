import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './styles.scss';

import { getRecipes, getRecipe, deleteRecipe } from '../../store/actions';

const ListRecipes = () => {
  const recipes = useSelector(state => state.recipes);
  const apiResponse = useSelector(state => state.apiResponse);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [dispatch, apiResponse]);

  const removeItem = (id) => {
    dispatch(deleteRecipe(id))
  };

  const editItem = (id) => {
    dispatch(getRecipe(id))
  };

  const renderList = () => {
    return (
      <ul className="list">
        {recipes.map((item, ) => {
          return <li key={item.id} className="list-item">
                  <button onClick={e => removeItem(item.id)}>X</button>
                  <button onClick={e => editItem(item.id)}>Edit</button>
                  <span>{item.name}</span>
                  <ul>
                    {item.ingredients.length > 0 && item.ingredients.map((ing, index) => {
                      return <li key={index}>{ing}</li>
                    })}
                  </ul>
                </li>
        })}
      </ul>
    );
  };

  const conditionalRendering = () => {
    if (typeof recipes !== 'undefined') {
      return renderList();
    }
    return <p>Loading...</p>
  }
  return (
    <div id="list-recipes">
      { conditionalRendering() }
    </div>
  );
};

export default ListRecipes;
