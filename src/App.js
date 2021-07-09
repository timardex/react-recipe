import React from 'react';
import {useSelector} from 'react-redux';

/* Layouts */
import ListRecipes from './components/ListRecipes';
import CreateEditRecipe from './components/CreateEditRecipe';
import Confirmation from './components/Confirmation';

const App = () => {
  const apiResponse = useSelector(state => state.apiResponse);
  return (
    <div className="App">
      <ListRecipes />
      <CreateEditRecipe />
      {typeof apiResponse !== 'undefined' && <Confirmation apiResponse={apiResponse.message}/>}
    </div>
  );
}

export default App;
