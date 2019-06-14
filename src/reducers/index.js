import { combineReducers } from 'redux';

const defaultState = {
    lives: 3,
    score: 0,
    isStarted: false,
    isLost: false,
    globalTimeoutLevel: 1000,
    targets: []
};

export const game = (state = defaultState, action) => {
    switch (action.type) {
        case 'GAME_START':
            return {
                ...state,
                isStarted: true
            };
        case 'GAME_STOP':
            window.location.reload();
            return {
                ...state,
                isStarted: false
            };
        case 'CHANGE_LEVEL':
            return {
                ...state,
                globalTimeoutLevel: parseInt(action.newGlobalTimeoutLevel, 10)
            }
        default:
            return state;
    }
};

export const targets = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TARGET':
            return Object.assign({},
                state, {
                    targets: [
                        ...state.targets,
                        {
                            id: action.target.id,
                            timeout: action.target.timeout,
                            location: {
                                x: Math.floor(Math.random() * (window.innerWidth - 50)) + 50,
                                y: Math.floor(Math.random() * (window.innerHeight - 50)) + 50
                            }
                        }
                    ]
                }
            );
        case 'UPDATE_TARGETS_TIMEOUT':
            if (state.targets.filter((t) => t.timeout === 1).length > 0) {
                const nbTargetsDying = state.targets.filter((t) => t.timeout <= 1).length;
                if (state.lives <= nbTargetsDying) {
                    return Object.assign({}, 
                        state, {
                            lives: state.lives - nbTargetsDying,
                            targets: state.targets.map((t) => Object.assign({}, t, { timeout: t.timeout - 1 })).filter((t) => t.timeout > 0),
                            isLost: true
                        }
                    );
                } else {
                    return Object.assign({}, 
                        state, {
                            lives: state.lives - nbTargetsDying,
                            targets: state.targets.map((t) => Object.assign({}, t, { timeout: t.timeout - 1 })).filter((t) => t.timeout > 0),
                        }
                    );
                }
            } else {
                return Object.assign({},
                    state, {
                        targets: state.targets.map((t) => Object.assign({}, t, { timeout: t.timeout - 1 }))
                    }
                );
            }
        case 'DELETE_TARGET':
            return Object.assign({},
                state, {
                    score: state.score + 1,
                    targets: state.targets.filter((t) => t.id !== action.target.id)
                }
            );
        default:
            return state;
    }
};

const reducers = combineReducers({
    game,
    targets
});

export default reducers;