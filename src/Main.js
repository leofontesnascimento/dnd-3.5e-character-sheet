import React from 'react';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducers from './reducers';

import DrawerNavigator from './DrawerNavigator';

export default props => (
  <Provider store={createStore(reducers)}>
    <DrawerNavigator />
  </Provider>
);
