import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import fetchCategories from '../../redux/actions/categories';
import './styles.scss';

export const Categories = ({ categories, loading, error, fetchCategories }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  let display;

  if (loading) {
    display =
      <div data-test="loading-categories">
        <Loader type="Rings" color="#00BFFF" height={80} width={80} />
      </div>;
  } else if (error) {
    display = <div data-test="error-categories">{error}</div>;
  } else {
    display = categories.map((category) => <div className="card-categories" key={category.id}>{category.name}</div>);
  }

  return (
    <div className="container-categories" data-test="component-categories">
      {display}
    </div>
  )
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
  error: state.categories.error,
});

export default connect(mapStateToProps, { fetchCategories })(Categories);
