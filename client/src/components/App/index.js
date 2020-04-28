import React from 'react';

import Categories from '../Categories';
import './styles.scss';

const App = () => (
  <div className="app">
    <Categories categories={['lol', 'a', 'b']} />
  </div>
);

export default App;
