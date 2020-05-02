import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../utils/testUtils';
import ConnectedCategories, { Categories } from './index';

/* This is testing for the unconnected component */
describe('Categories', () => {
  const defaultProps = {
    categories: [
      { id: 1, name: 'sports' },
      { id: 2, name: 'science' },
      { id: 3, name: 'art' },
    ],
    loading: false,
  };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Categories {...setupProps} />);
  };

  it('render without errors', () => {
    const wrapper = setup();
    expect(wrapper).toBeDefined();
  });

  it('renders the different categories', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-categories');
    expect(component.children().length).toBe(defaultProps.categories.length);
  });

  it('renders loading when categories has not been fetched', () => {
    const wrapper = setup({ loading: true });
    const component = findByTestAttr(wrapper, 'loading-categories');
    expect(component.length).toBe(1);
  });
});

/* This is testing for the connected component */
describe('ConnectedCategories', () => {
  const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow(<ConnectedCategories store={store} />).dive().dive();
  };

  it('render without errors', () => {
    const wrapper = setup();
    expect(wrapper).toBeDefined();
  });

  it('renders the different categories', () => {
    const initialState = {
      categories:
      {
        data: [{ id: 1, name: 'Science' }, { id: 2, name: 'Art' }],
        loading: false,
      },
    };
    const wrapper = setup(initialState);
    const component = findByTestAttr(wrapper, 'component-categories');
    expect(component.children().length).toBe(initialState.categories.data.length);
  });

  it('renders loading when categories has not been fetched', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'loading-categories');
    expect(component.length).toBe(1);
  });

  it('does not render loading when categories have been fetched', () => {
    const initialState = {
      categories:
      {
        data: [{ id: 1, name: 'Science' }, { id: 2, name: 'Art' }],
        loading: false,
      },
    };
    const wrapper = setup(initialState);
    const component = findByTestAttr(wrapper, 'loading-categories');
    expect(component.length).toBe(0);
  });
});
