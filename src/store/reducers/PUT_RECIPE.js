export const PUT_RECIPE = (state, action) => {
  return {
    ...state,
    apiResponse: action.payload.response,
    recipe: undefined,
  };
};