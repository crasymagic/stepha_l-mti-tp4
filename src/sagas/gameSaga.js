import { take, put } from 'redux-saga/effects';
import { gameStart, gameStartRequested } from '../actions/game';

export function* gameSaga() {
    while (true) {
        yield take(gameStartRequested());
        yield put(gameStart());
    }
}

export function* targetClickedSaga() {
    yield take('TARGET_CLICKED_REQUESTED');
}