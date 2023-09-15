import apiUtils from '../helpers/apiUtils';

const BASE_URL = 'todo';

export const createTask = async (task) => {
  let result = await apiUtils.post(`${BASE_URL}/create`, task);
  return result;
}

export const updateTask = async (task) => {
  let result = await apiUtils.post(`${BASE_URL}/update`, task);
  return result;
}

export const markTaskDone = async (id) => {
  let result = await apiUtils.post(`${BASE_URL}/mark-as-done/${id}`);
  return result;
}

export const removeTask = async (id) => {
  let result = await apiUtils.post(`${BASE_URL}/remove/${id}`);
  return result;
}

export const fetchTodos = async () => {
  let result = await apiUtils.get(`${BASE_URL}/list`);
  return result;
}
