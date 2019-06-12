import React from 'react';
import { Provider } from 'react-redux';
import GameLayout from './layouts/Game';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <GameLayout/>
  </Provider>
);

export default Root;
