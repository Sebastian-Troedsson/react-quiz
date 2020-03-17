export const categories = (state = [], action) => {
  switch (action.type) {
    case 'SUCCESS':
      return [...action.payload];
    default: 
      return state; 
  };
};

export const fetchFailed = (state = null, action) => {
  switch (action.type) {
    case 'FAILURE':
      return action.payload;
    default: 
      return state;
  };
};

export const isLoading = (state = true, action) => {
  switch (action.type) {
    case 'LOADING':
      return action.payload;
    default: 
      return state;  
  }
};