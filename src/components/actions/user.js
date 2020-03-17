const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const logIn = (name) => {
  return {
    type: LOG_IN,
    name
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};