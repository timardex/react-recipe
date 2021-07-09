import React from 'react';

const Recipe = (props) => {
  const { recipe, ingredients, handleClick } = props;
  return (
    <div>
      {recipe.name && <p>Name: {recipe.name}</p>}

      {ingredients.length > 0 && <p>Ingredients:</p>}
      <ul>
        {ingredients.map((item, index) => {
          return <li key={index}>
                  {item}
                  <button onClick={e => handleClick('delete', item)}>Delete</button>
                  <button onClick={e => handleClick('edit', item)}>Edit</button>
                </li>
        })}
      </ul>
    </div>
  );
};

export default Recipe;