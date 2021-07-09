import { GET_RECIPES } from './GET_RECIPES';
import { GET_RECIPE } from './GET_RECIPE';
import { POST_RECIPE } from './POST_RECIPE';
import { DELETE_RECIPE } from './DELETE_RECIPE';
import { PUT_RECIPE } from './PUT_RECIPE';

const reducers = (state= {}, action) => {
    switch(action.type) {
      case 'GET_RECIPES':
        return GET_RECIPES(state, action);
      case 'GET_RECIPE':
        return GET_RECIPE(state, action);
      case 'POST_RECIPE':
        return POST_RECIPE(state, action);
      case 'DELETE_RECIPE':
        return DELETE_RECIPE(state, action);
      case 'PUT_RECIPE':
        return PUT_RECIPE(state, action);
      default:
        return state;
    };
};

export default reducers;
