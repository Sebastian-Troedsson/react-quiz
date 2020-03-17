const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const LOADING = 'LOADING';

export const success = (data) => {
  return {
    type: SUCCESS,
    payload: data
  };
};

export const failure = (message) => {
  return {
    type: FAILURE,
    payload: message
  };
};

export const isLoading = (bool) => {
  return {
    type: LOADING,
    payload: bool
  };
}

export const fetchData = (url) => (dispatch) => {
  dispatch(isLoading(true));
  fetch(url)
    .then(res => res.json())
    .then(data => {
      dispatch(success(data.trivia_categories));
      dispatch(isLoading(false));
    })
    .catch(error => {
      dispatch(success(error.message));
      dispatch(isLoading(false));
    });
};