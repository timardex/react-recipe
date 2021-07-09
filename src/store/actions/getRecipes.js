import Service from "../service";
import api from "../api";

const getRecipes = () => {
  return async function (dispatch) {
    try {
      const { data } = await Service.getRequest(api);
      const action = {
        type: 'GET_RECIPES',
        payload: {
          response: data,
        },
      };

      dispatch(action);

    } catch(error) {
      const action = {
        type: 'GET_RECIPES',
        payload: {
          response: error,
        },
      };
      dispatch(action);
    }
  };
};

export default getRecipes;