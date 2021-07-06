import React, { useState, useEffect } from 'react';

const GetRecipes = (props) => {
  const { service, api_base } = props;

  const [recipes, getRecipes] = useState(null);

  useEffect(() => {
    const response = async () => {
      try {
        const data = await service.getRequest(api_base);
        getRecipes(data.data);
      } catch (error) {
        return error;
      }
    }
    response();
  }, [api_base, service]);

  return (
    <div id="get-recipes">
      <ul>
        {recipes !== null && recipes.map((item, ) => {
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

export default GetRecipes;