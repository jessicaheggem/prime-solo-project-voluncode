import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* developerProjectSaga(){
    yield takeEvery('FETCH_DEVELOPER_PROJECT', fetchDeveloperProject)
}

function* fetchDeveloperProject(){
    try{
        let response = yield axios.get('/api/developer_project');
        console.log(response.data);
        yield put({ type: 'SET_DEVELOPER_PROJECT', payload: response.data[0]});
    }
    catch (error) {
        console.log('Error getting developer project', error)
    }
}

export default developerProjectSaga;
