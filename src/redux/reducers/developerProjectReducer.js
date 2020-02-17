
const developerProjectReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_DEVELOPER_PROJECT':
        return action.payload;
      case 'RESET_DEVELOPER_PROJECT':
        return {};
      default:
        return state;
    }
  };
  
  export default developerProjectReducer;