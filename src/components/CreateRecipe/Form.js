import React from 'react';

const Form = (props) => {
  const { recipe, onChange, onClick } = props;
  return (
    <div>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Enter recipe name"
          value={recipe.name}
          onChange={e => onChange(e)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="ingredient"
          placeholder="Enter recipe ingredients"
          value={recipe.ingredient}
          onChange={e => onChange(e)}
        />
        <button onClick={e => onClick()} disabled={recipe.ingredient === ''}>Add ingredient</button>
      </div>
    </div>
  );
};

export default Form;