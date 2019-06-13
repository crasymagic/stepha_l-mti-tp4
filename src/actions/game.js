export const GAME_START_REQUESTED = 'GAME_START_REQUESTED';
export const GAME_START = 'GAME_START';
export const GAME_STOP_REQUESTED = 'GAME_STOP_REQUESTED';
export const GAME_STOP = 'GAME_STOP';

export const gameStartRequested = () => ({ type: GAME_START_REQUESTED });
export const gameStart = () => ({ type: GAME_START });
export const gameStopRequested = () => ({ type: GAME_STOP_REQUESTED });
export const gameStop = () => ({ type: GAME_STOP });