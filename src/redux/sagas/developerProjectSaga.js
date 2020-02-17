import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* developerProjectSaga() {
    yield takeEvery('FETCH_DEVELOPER_PROJECT', fetchDeveloperProject)
}

function* fetchDeveloperProject(action) {
    try {
        let response = yield axios.get(`/api/developer_project`);
        console.log(response.data);
        if (response.data.length > 0) {
            yield put({ type: 'SET_DEVELOPER_PROJECT', payload: response.data[0] });
        } else{
            yield put({ type: 'SET_DEVELOPER_PROJECT', payload: {} });
        }
    }
    catch (error) {
        console.log('Error getting developer project', error)
    }
}

export default developerProjectSaga;
