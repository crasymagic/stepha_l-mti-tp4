import { call, take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { gameStart, GAME_START_REQUESTED, gameStop, GAME_STOP_REQUESTED, changeLevel, CHANGE_LEVEL_REQUESTED } from '../actions/game';
import { addTarget, deleteTarget, updateTargetsTimeout, DELETE_TARGET_REQUESTED } from '../actions/targets';

let nbSpawningTarget = 1;

export function* gameSaga() {
    while (true) {
        const payload = yield take(GAME_START_REQUESTED);
        yield put(gameStart());
        yield call(looper, parseInt(payload.globalTimeoutLevel, 10));
    }
}

export function* changeLevelSaga() {
    while (true) {
        const payload = yield take(CHANGE_LEVEL_REQUESTED);
        yield put(changeLevel(payload.newGlobalTimeoutLevel));
    }
}

export function* targetClickedSaga() {
    while (true) {
        const payload = yield take(DELETE_TARGET_REQUESTED);
        const currentScore = parseInt(payload.currentScore, 10);
        if ((currentScore + 1) % 5 === 0) {
            nbSpawningTarget++;
        }
        yield put(deleteTarget(payload.target.id));
    }
}

export function* stopGameSaga() {
    while (true) {
        yield take(GAME_STOP_REQUESTED);
        yield put(gameStop());
    }
}

function* looper(timeout) {
    yield delay(timeout);
    for (let i = 0; i < nbSpawningTarget; i++) {
        yield put(addTarget(6, {
            x: Math.floor(Math.random() * (window.innerWidth - 50)) + 50,
            y: Math.floor(Math.random() * (window.innerHeight - 50)) + 50
        }));
    }
    yield put(updateTargetsTimeout());
    yield call(looper, timeout);
}