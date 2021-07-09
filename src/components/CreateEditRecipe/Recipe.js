import React from 'react';

const Recipe = (props) => {
  const { recipe, handleClick } = props;
  const disableBtn = () => {
    return recipe.ingredient !== '';
  }
  return (
    <div>
      {recipe.name && <p>Name: {recipe.name}</p>}

      {recipe.ingredients.length > 0 && <p>Ingredients:</p>}
      <ul>
        {recipe.ingredients.map((item, index) => {
          return <li key={index}>
                  {item}
                  <button
                    onClick={e => disableBtn() ? null : handleClick('delete', item)}
                    disabled={disableBtn()}>Delete</button>
                  <button
                    onClick={e => disableBtn() ? null : handleClick('edit', item)}
                    disabled={disableBtn()}>Edit</button>
                </li>
        })}
      </ul>
    </div>
  );
};

export default Recipe;