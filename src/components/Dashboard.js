import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { logOut } from './actions/user';
import { fetchData } from './actions/categories';

function Dashboard({ user, logOut, fetchData, isLoading, fetchFailed, categories }) {
  useEffect(() => {
    fetchData('https://opentdb.com/api_category.php');
  }, []);
  
  return (
    <div className="dashboard">
      <h2>Welcome {user.name}</h2>
      {isLoading ? <p>Loading...</p> : 
        fetchFailed ? <p>Something went wrong</p> :
          <select>
            { categories.map((category, i) => <option key={i}>{category.name}</option>) }
          </select>
      }
      <button onClick={() => logOut()}>Log out</button>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  categories: state.categories,
  isLoading: state.isLoading,
  fetchFailed: state.fetchFailed
});

export default connect(mapStateToProps, { logOut, fetchData })(Dashboard)
