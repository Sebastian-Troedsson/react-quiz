import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import fetchCategories from '../../redux/actions/categories';
import './styles.scss';

export const Categories = ({ categories, loading, fetchCategories }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  let content;

  if (loading) {
    content = (
      <div data-test="loading-categories">
        <Loader type="Rings" color="#00BFFF" height={80} width={80} />
      </div>
    );
  } else {
    content = categories.map((category) => <div className="card-categories" key={category.id}>{category.name}</div>);
  }

  return (
    <>
      <h1>Choose a subject!</h1>
      <div className="container-categories" data-test="component-categories">
        {content}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.data,
  loading: state.categories.loading,
});

export default connect(mapStateToProps, { fetchCategories })(Categories);
