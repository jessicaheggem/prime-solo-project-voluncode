import projectsReducer from './projectsReducer'


describe('testing projectsReducer', () => {
    test('Should switch to set projects', () => {
        let state = [];
        let action = {type: 'SET_PROJECTS'};
    
        let returnedState = projectsReducer(state, action);
    
        expect(returnedState).toEqual(action.payload);
    });
})
