import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './styles.scss';

import { getRecipes, deleteRecipe } from '../../store/actions';

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

  return (
    <div id="list-recipes">
      <ul className="list">
        {typeof recipes !== 'undefined' && recipes.map((item, ) => {
          return <li key={item.id} className="list-item">
                  <button onClick={e => removeItem(item.id)}>X</button>
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

export default ListRecipes;
