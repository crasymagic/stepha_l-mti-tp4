import {
    combineReducers
} from 'redux';

const defaultState = {
    lives: 3,
    score: 0,
    isStarted: false,
    targets: [{
        id: 0,
        timeout: 5,
        location: {
            x: Math.floor(Math.random() * window.innerWidth) + 1,
            y: Math.floor(Math.random() * window.innerHeight) + 1
        }
    }]
};

export const game = (state = defaultState, action) => {
    switch (action.type) {
        case 'GAME_START':
            console.log('GAME_START');
            return {
                ...state,
                isStarted: true
            };
        default:
            return state;
    }
};

export const targets = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TARGET':
            console.log('ADD_TARGET');
            return Object.assign({},
                state, {
                    targets: [
                        ...state.targets,
                        {
                            id: action.target.id,
                            timeout: action.target.timeout,
                            location: {
                                x: Math.floor(Math.random() * window.innerWidth) + 1,
                                y: Math.floor(Math.random() * window.innerHeight) + 1
                            }
                        }
                    ]
                }
            );
        case 'UPDATE_TARGET':
            console.log('UPDATE_TARGET');
            return Object.assign({},
                state, {
                    targets: state.targets.map((t) => t.timeout--)
                }
            );
        case 'DELETE_TARGET':
            console.log('DELETE_TARGET', state, action);
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