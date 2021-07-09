import React from 'react';

const Form = (props) => {
  const { recipe, onChange, onClick } = props;
  const disableBtn = () => {
    return recipe.ingredient === '';
  }
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
        <button
          onClick={e => disableBtn() ? null : onClick()}
          disabled={disableBtn()}>Add ingredient</button>
      </div>
    </div>
  );
};

export default Form;