const developerProjectReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_DEVELOPER_PROJECT':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default developerProjectReducer;