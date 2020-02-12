import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import projects from './projectsReducer';
// renaming the projectsReducer here to "projects" means it also needs to be 
// called projects when it gets mapped (.map) over in AvailableProjects
// i.e. this.props.reduxStore.projects.map , otherwise, IT WON'T WORK


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, 
  projects,// will have an id and username if someone is logged in
});

export default rootReducer;
