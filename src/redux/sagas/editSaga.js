import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* editSaga() {
    yield takeEvery('SUBMIT_EDIT', submitEdit);
}

function* submitEdit(action) {
    console.log('in submit edit', action);
    let response = yield axios.put(`/api/user/${action.payload.id}`, action.payload);
    yield put({ type: 'FETCH_USER' });

}

export default editSaga;