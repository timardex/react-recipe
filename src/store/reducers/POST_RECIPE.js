export const POST_RECIPE = (state, action) => {
  return {
    ...state,
    apiResponse: action.payload.response
  };
};