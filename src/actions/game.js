export const GAME_START_REQUESTED = 'GAME_START_REQUESTED';
export const GAME_START = 'GAME_START';
export const GAME_STOP_REQUESTED = 'GAME_STOP_REQUESTED';
export const GAME_STOP = 'GAME_STOP';
export const CHANGE_LEVEL_REQUESTED = 'CHANGE_LEVEL_REQUESTED';
export const CHANGE_LEVEL = 'CHANGE_LEVEL';

export const gameStartRequested = (globalTimeoutLevel) => ({ type: GAME_START_REQUESTED, globalTimeoutLevel: globalTimeoutLevel });
export const gameStart = () => ({ type: GAME_START });
export const gameStopRequested = () => ({ type: GAME_STOP_REQUESTED });
export const gameStop = () => ({ type: GAME_STOP });
export const changeLevelRequested = (newGlobalTimeoutLevel) => ({ type: CHANGE_LEVEL_REQUESTED, newGlobalTimeoutLevel: newGlobalTimeoutLevel });
export const changeLevel = (newGlobalTimeoutLevel) => ({ type: CHANGE_LEVEL, newGlobalTimeoutLevel: newGlobalTimeoutLevel });