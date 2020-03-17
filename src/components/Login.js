import React, { useState } from 'react';
import { logIn } from './actions/user';
import { connect } from 'react-redux';

function Login({ logIn }) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    if(inputValue !== '') {
      logIn(inputValue);
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

export default connect(null, { logIn })(Login)
