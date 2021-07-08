import Service from "../service";
import api from "../api";

export const postRecipe = (param) => {
  return async function (dispatch) {
    try {
      const data = await Service.postRequest(api, param);
      const action = {
        type: 'POST_RECIPE',
        payload: {
          response: data,
        },
      };

      dispatch(action);

    } catch(error) {
      const action = {
        type: 'POST_RECIPE',
        payload: {
          response: error,
        },
      };
      dispatch(action);
    }
  };
};