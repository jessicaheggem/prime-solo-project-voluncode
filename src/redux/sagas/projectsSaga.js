import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* projectsSaga(){
    yield takeEvery('FETCH_PROJECTS', fetchProjects)
}

function* fetchProjects(){
    try{
        let response = yield axios.get('/api/projects');
        console.log(response.data);
        yield put({ type: 'SET_PROJECTS', payload: response.data});
    }
    catch (error) {
        console.log('Error getting projects', error)
    }
}

export default projectsSaga;
