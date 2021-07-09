import React from 'react';

/* Layouts */
import ListRecipes from './components/ListRecipes';
import CreateEditRecipe from './components/CreateEditRecipe';

const App = () => {
  return (
    <div className="App">
      <ListRecipes />
      <CreateEditRecipe />
    </div>
  );
}

export default App;
