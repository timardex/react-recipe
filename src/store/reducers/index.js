import {GET_RECIPES} from './GET_RECIPES';

const reducers = (state= {}, action) => {
    switch(action.type) {
      case 'GET_RECIPES':
        return GET_RECIPES(state, action)
      default:
        return state;
    }
};

export default reducers;
