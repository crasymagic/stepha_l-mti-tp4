import { take, put } from 'redux-saga/effects';
import { gameStart, GAME_START_REQUESTED } from '../actions/game';
import { deleteTarget, DELETE_TARGET_REQUESTED } from '../actions/targets';

export function* gameSaga() {
    while (true) {
        yield take(GAME_START_REQUESTED);
        yield put(gameStart());
    }
}

export function* targetClickedSaga() {
    while (true) {
        const payload = yield take(DELETE_TARGET_REQUESTED);
        yield put(deleteTarget(payload.target.id));
    }
}