/*
 * https://www.sitepoint.com/introducing-the-css-grid-layout/
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { IntlProvider } from 'react-intl';
import thunk from 'redux-thunk';
import reducers from './modules/reducers';
import Router from './router';
import logger from './middleware/logger';
import { en } from './assets/locales';

console.log('ENVIRONMENT VARS %s %s %s %s %s', TARGET, PLATFORM, VERSION, REST_API, LANGUAJE);
const store = createStore(reducers, applyMiddleware(thunk, logger));

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <IntlProvider locale={ LANGUAJE.toLowerCase() } messages={ en }>
          <Component />
        </IntlProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('app-container')
  );
};

render(Router);

if (module.hot) {
  module.hot.accept('./router', () => {
    render(Router);
  });
}
