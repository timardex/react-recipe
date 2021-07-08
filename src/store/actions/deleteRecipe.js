import Service from "../service";
import api from "../api";

export const deleteRecipe = (param) => {
  return async function (dispatch) {
    try {
      const request = `${api}${param}`
      const data = await Service.deleteRequest(request);
      const action = {
        type: 'DELETE_RECIPE',
        payload: {
          response: data,
        },
      };

      dispatch(action);

    } catch(error) {
      const action = {
        type: 'DELETE_RECIPE',
        payload: {
          response: error,
        },
      };
      dispatch(action);
    }
  };
};