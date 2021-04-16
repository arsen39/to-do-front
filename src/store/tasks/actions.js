import {API} from '../../api/config';

export const CREATE_TASK = "CREATE_TASK"
export const createTask = (data) => {
  return {
    type: CREATE_TASK,
    request: {
      url: `${API.url}/`,
      method: "POST",
      data,
    },
    meta: {
      asPromise: true,
    },
  };
};

export const GET_TASKS = "GET_TASKS"
export const getTasks = (data) => {
  return {
    type: GET_TASKS,
    request: {
      url: `${API.url}/`,
      method: "GET",
      data,
    },
    meta: {
      asPromise: true,
    },
  };
};

export const DELETE_TASK = "DELETE_TASK"
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    request: {
      url: `${API.url}/${id}`,
      method: "DELETE",
    },
    meta: {
      asPromise: false,
    },
  };
};

export const UPDATE_TASK = "UPDATE_TASK"
export const updateTask = (id) => {
  return {
    type: UPDATE_TASK,
    request: {
      url: `${API.url}/${id}`,
      method: "PATCH",
    },
    meta: {
      asPromise: true,
    },
  };
};