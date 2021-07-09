import Service from "../service";
import api from "../api";

const getRecipe = (param) => {
  return async function (dispatch) {
    try {
      const request = `${api}${param}`;
      const { data } = await Service.getRequest(request);
      const action = {
        type: 'GET_RECIPE',
        payload: {
          response: data,
        },
      };

      dispatch(action);

    } catch(error) {
      const action = {
        type: 'GET_RECIPE',
        payload: {
          response: error,
        },
      };
      dispatch(action);
    }
  };
};

export default getRecipe;