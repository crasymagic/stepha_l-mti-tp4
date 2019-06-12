import { combineReducers } from 'redux';

let TARGET_IDS = 0;

const defaultTargetState = {
    id: 3,
    timeout: 5,
    location: {
        x: Math.floor(window.innerWidth / 2) + 1,
        y: Math.floor(window.innerHeight / 2) + 1
    }
}

const defaultTargetsState = {
    targets: [
        {
            id: 0,
            timeout: 5,
            location: {
                x: Math.floor(Math.random() * window.innerWidth) + 1,
                y: Math.floor(Math.random() * window.innerHeight) + 1
            }
        },
        {
            id: 1,
            timeout: 5,
            location: {
                x: Math.floor(Math.random() * window.innerWidth) + 1,
                y: Math.floor(Math.random() * window.innerHeight) + 1
            }
        },
        {
            id: 2,
            timeout: 5,
            location: {
                x: Math.floor(Math.random() * window.innerWidth) + 1,
                y: Math.floor(Math.random() * window.innerHeight) + 1
            }
        }
    ]
};

const target = (state = defaultTargetState, action) => {
    switch (action.type) {
        case 'ADD_TARGET':
            return { id: TARGET_IDS++ };
        case 'UPDATE_TARGET':
            return {
                ...state,
                score: action.score - 1
            };
        default:
            return state;
    }
}

const targets = (state = defaultTargetsState, action) => {
    switch (action.type) {
        case 'ADD_TARGET':
            return [...state, target(undefined, action)];
        case 'UPDATE_TARGET':
            return state.map((t) => t.id === action.id ? target(t, action): t);
        case 'DELETE_TARGET':
            return state.filter((t) => t.id !== action.id);
        default:
            return state;
    }
}

export default targets;