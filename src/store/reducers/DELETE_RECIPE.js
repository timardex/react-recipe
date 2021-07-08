export const DELETE_RECIPE = (state, action) => {
  return {
    ...state,
    apiResponse: action.payload.response
  };
};