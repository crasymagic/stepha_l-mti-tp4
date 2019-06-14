export const ADD_TARGET = 'ADD_TARGET';
export const DELETE_TARGET_REQUESTED = 'DELETE_TARGET_REQUESTED';
export const DELETE_TARGET = 'DELETE_TARGET';
// export const UPDATE_TARGETS_TIMEOUT_REQUESTED = 'UPDATE_TARGETS_TIMEOUT_REQUESTED';
export const UPDATE_TARGETS_TIMEOUT = 'UPDATE_TARGETS_TIMEOUT';

let nextTargetId = 0;

export const addTarget = (timeout, location) => ({ type: ADD_TARGET, target: { id: nextTargetId++, timeout: timeout, location: location}});

export const deleteTargetRequested = (id, currentScore) => ({ type: DELETE_TARGET_REQUESTED, target: { id: id }, currentScore: currentScore});
export const deleteTarget = (id) => ({ type: DELETE_TARGET, target: { id: id }});

// export const updateTargetsTimeoutRequested = () => ({ type: UPDATE_TARGETS_TIMEOUT_REQUESTED });
export const updateTargetsTimeout = () => ({ type: UPDATE_TARGETS_TIMEOUT });
