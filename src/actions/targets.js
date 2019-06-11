export const ADD_TARGET = 'ADD_TARGET';
export const DELETE_TARGET = 'DELETE_TARGET';
export const UPDATE_TARGET_TIMEOUT = 'UPDATE_TARGET_TIMEOUT';

let nextTargetId = 0;

export const addTarget = (timeout, location) => ({ type: ADD_TARGET, target: { id: nextTargetId++, timeout: timeout, location: location}});
export const deleteTarget = (id) => ({ type: DELETE_TARGET, target: { id: id }});
export const updateTargetTimeout = (id, timeout) => ({ type: UPDATE_TARGET_TIMEOUT, target: { id: id, timeout: timeout}});