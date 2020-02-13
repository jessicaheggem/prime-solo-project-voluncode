
const projectInfoReducer = (state = 0, action) => {
    switch (action.type) {
      case 'SET_PROJECT_INFO':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default projectInfoReducer;