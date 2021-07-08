import React from 'react';

/* Layouts */
import ListRecipes from './components/ListRecipes';
import CreateRecipe from './components/CreateRecipe';

const App = () => {
  return (
    <div className="App">
      <ListRecipes />
      <CreateRecipe />
    </div>
  );
}

export default App;
