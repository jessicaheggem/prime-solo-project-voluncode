import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* projectInfoSaga(){
    yield takeEvery('FETCH_PROJECT_INFO', fetchProjectInfo)
    yield takeEvery('POST_PROJECT', postProject)
}

function* postProject(action){
    console.log('in postProject saga', action.payload)
    yield axios.post(`/api/project_info`, action.payload)
    // yield put({ type: 'FETCH_PROJECT' })
    // put === dispatch
}

function* fetchProjectInfo(action){
    try{
        let response = yield axios.get(`/api/project_info/${action.payload}`);
        console.log(response.data);
    // the word "put" === dispatch
        yield put({ type: 'SET_PROJECT_INFO', payload: response.data[0] });
    }
    catch (error) {
        console.log('Error getting project info', error)
    }
}

export default projectInfoSaga;
