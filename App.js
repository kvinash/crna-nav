/**
 * @flow
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from "redux-promise-middleware";
import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = applyMiddleware( promise(),thunk, logger);
class ReduxExampleApp extends React.Component {
  
  store = createStore(AppReducer,{},composeWithDevTools(
  middleware,
  // other store enhancers if any
));

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

export default ReduxExampleApp;
