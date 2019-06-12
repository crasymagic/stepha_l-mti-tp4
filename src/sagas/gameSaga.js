import { take, put } from 'redux-saga/effects';
import { gameStart, GAME_START_REQUESTED } from '../actions/game';

export function* gameSaga() {
    while (true) {
        yield take(GAME_START_REQUESTED);
        yield put(gameStart());
    }
}

export function* targetClickedSaga() {
    yield take('TARGET_CLICKED_REQUESTED');
    console.log('clicked');
}