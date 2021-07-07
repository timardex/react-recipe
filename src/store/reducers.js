const reducers = (state= {}, action) => {
    switch(action.type) {
      case 'GET_RECIPES':
        return {
          ...state,
          recipes: action.payload.response,
        };
      default:
        return state;
    }
};

export default reducers;
