export const PUT_RECIPE = (state, action) => {
  return {
    ...state,
    apiResponse: action.payload.response.message,
    recipe: undefined,
  };
};