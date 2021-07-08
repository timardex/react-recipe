import React from 'react';

const Recipe = (props) => {
  const { recipe, ingredients, onClick } = props;
  return (
    <div>
      {recipe.name && <p>Name: {recipe.name}</p>}

      {ingredients.length > 0 && <p>Ingredients:</p>}
      <ul>
        {ingredients.map((item, index) => {
          return <li key={index}>
                  {item} <button onClick={e => onClick(item)}>Delete</button>
                </li>
        })}
      </ul>
    </div>
  );
};

export default Recipe;