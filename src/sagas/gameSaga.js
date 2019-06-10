import { take, put } from 'redux-saga/effects';

function* gameSaga() {
    while (true) {
        yield take('GAME_START_REQUESTED');
        yield put({ type: 'GAME_START' });
    }
}
 export default gameSaga;