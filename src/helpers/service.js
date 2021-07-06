import axios from 'axios';
import { apiHeader } from './api';

class Service {
  async getRequest(api) {
    const response = await axios.get(
      api,
      {
        headers: apiHeader(),
      },
    );

    try {
      return response.data;
    } catch (error) {
      return error;
    }
  };

  async putRequest(api, data) {
    const response = await axios.put(
      api,
      data,
      {
        headers: apiHeader(),
      },
    );
    try {
      return response;
    } catch (error) {
      return error;
    }
  };

  async postRequest(api, data) {
    const response = await axios.post(
      api,
      data,
      {
        headers: apiHeader(),
      },
    );
    try {
      return response;
    } catch (error) {
      return error;
    }
  };

  async deleteRequest(api, data) {
    const response = await axios.delete(
      api,
      {
        data,
        headers: apiHeader(),
      },
    );
    try {
      return response;
    } catch (error) {
      return error;
    }
  };
};

export default new Service();