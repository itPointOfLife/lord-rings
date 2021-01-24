import { CHANGE_NAME, SET_DATA, DELETE_NAME, ADD_NAME } from './types';

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const changeName = (id, value) => ({
  type: CHANGE_NAME,
  payload: { id, value },
});

export const deleteName = (id) => ({
  type: DELETE_NAME,
  payload: id,
});

export const addName = (name, race) => ({
  type: ADD_NAME,
  payload: { name, race },
});
