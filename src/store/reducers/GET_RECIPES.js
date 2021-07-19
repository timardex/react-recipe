export const GET_RECIPES = (state, action) => {
  return {
    ...state,
    recipes: action.payload.response,
    apiResponse: undefined,
    recipe: undefined,
  };
};