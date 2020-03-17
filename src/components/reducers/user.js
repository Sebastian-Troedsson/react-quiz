const initialState = {
  name: null,
  isLoggedIn: false
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { name: action.name, isLoggedIn: true };
    case 'LOG_OUT':
      return { name: null, isLoggedIn: false };
    default:
      return state;  
  }
};