import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { useSelector } from 'react-redux';

export default function Home() {
  const isLogged = useSelector(state => state.isLogged);

  return (
    <div className="Home">
    {!isLogged
      ? <Login />
      : <Dashboard />
    }
    </div>
  )
}
