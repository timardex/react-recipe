export const GET_RECIPE = (state, action) => {
  return {
    ...state,
    recipe: action.payload.response,
  };
};