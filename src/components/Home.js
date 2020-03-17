import React, { useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function Home({ user }) {
  return (
    <div className="Home">
    {!user.isLoggedIn
      ? <Redirect to="/login" />
      : <Redirect to="/dashboard" />
    }
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Home);
