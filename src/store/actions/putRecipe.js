import Service from "../service";
import api from "../api";

const putRecipe = (param, id) => {
  return async function (dispatch) {
    try {
      const request = `${api}${id}`;
      const {data} = await Service.putRequest(request, param);
      const action = {
        type: 'PUT_RECIPE',
        payload: {
          response: data,
        },
      };

      dispatch(action);

    } catch(error) {
      const action = {
        type: 'PUT_RECIPE',
        payload: {
          response: error,
        },
      };
      dispatch(action);
    }
  };
};

export default putRecipe;