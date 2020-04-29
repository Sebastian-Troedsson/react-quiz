import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../utils/testUtils';
import { Categories } from './index';

const defaultProps = {
  categories: [
    { id: 1, name: 'sports' },
    { id: 2, name: 'science' },
    { id: 3, name: 'art' },
  ],
  loading: false,
};

/**
* Factory function to create a ShallowWrapper for the Congrats component.
* @function setup
* @param {object} props - Component props specific to this setup.
* @returns {ShallowWrapper}
*/
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Categories {...setupProps} />);
};

describe('Categories', () => {
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

  it('shows error message when fetch failed', () => {
    const wrapper = setup({ error: 'Whoops' });
    const component = findByTestAttr(wrapper, 'error-categories');
    expect(component.length).toBe(1);
  })
});
