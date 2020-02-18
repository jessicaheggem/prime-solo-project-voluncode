import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* editSaga() {
    yield takeEvery('SUBMIT_EDIT', submitEdit);
}

function* submitEdit(action) {
    console.log('in submit edit', action);
    let response = yield axios.put(`/api/edit_profile`, action.payload);
    yield put({ type: 'SET_USER' });

}

export default editSaga;