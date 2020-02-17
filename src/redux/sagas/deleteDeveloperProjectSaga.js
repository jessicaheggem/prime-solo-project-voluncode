import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* deleteDeveloperProjectSaga() {
    yield takeEvery('DELETE_DEVELOPER_PROJECT', deleteDeveloperProject)
}

function* deleteDeveloperProject(action) {
    console.log(action.payload);
    
    try {
        let response = yield axios.delete(`/api/developer_project/${action.payload}`);
        console.log(response.data);
        yield put({ type: 'FETCH_DEVELOPER_PROJECT' })

    }
    catch (error) {
        console.log('Error deleting developer project', error)
    }
}

export default deleteDeveloperProjectSaga;
