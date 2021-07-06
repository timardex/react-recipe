import React from 'react';

/* Service */
import Service from './helpers/service';
import { api_base } from './helpers/api';

/* Layouts */
import GetRecipes from './components/GetRecipes';

const App = () => {
  return (
    <div className="App">
      <GetRecipes service={Service} api_base={api_base}/>
    </div>
  );
}

export default App;
