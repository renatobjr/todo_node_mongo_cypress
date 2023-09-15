import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const post = async (url, data) => {
  const response = await axios.post(`${BASE_URL}/${url}`, data);
  return response;
}

export const get = async (url, params) => {
  const response = await axios.get(`${BASE_URL}/${url}`, { params });
  return response;
}

export default { post, get };
