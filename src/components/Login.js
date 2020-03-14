import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from './actions';

export default function Login() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleClick = () => {
    if(inputValue !== '') {
      dispatch(logIn());
    }
  }

  return (
    <div className="login">
      <h2>Log In</h2>
      <input type="text" placeholder="Name.." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/> 
      <button onClick={handleClick}>Log in</button>
    </div>
  )
}
