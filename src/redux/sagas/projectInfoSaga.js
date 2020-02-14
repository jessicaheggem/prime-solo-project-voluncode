import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* projectInfoSaga(){
    yield takeEvery('FETCH_PROJECT_INFO', fetchProjectInfo)
    yield takeEvery('POST_PROJECT', postProject)
}

function* postProject(action){
    console.log('in postProject saga', action.payload)
    let response = yield axios.post(`/api/shelf`, action.payload)
    yield put({ type: 'FETCH_PROJECT_INFO' })
}

function* fetchProjectInfo(action){
    try{
        let response = yield axios.get(`/api/project_info/${action.payload}`);
        console.log(response.data);
        yield put({ type: 'SET_PROJECT_INFO', payload: response.data[0] });
    }
    catch (error) {
        console.log('Error getting project info', error)
    }
}

export default projectInfoSaga;
