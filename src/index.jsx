import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR,
  APP_READY,
  initialize,
  mergeConfig,
  subscribe,
} from '@edx/frontend-platform';
import {
  AppProvider,
  ErrorPage,
} from '@edx/frontend-platform/react';

import React from 'react';
import ReactDOM from 'react-dom';

import { messages as headerMessages } from '@edx/frontend-component-header';
import { messages as footerMessages } from '@edx/frontend-component-footer';

import appMessages from './i18n';
import configureStore from './data/configureStore';

import './index.scss';
import Head from './head/Head';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import Layout from "./layout";

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider store={configureStore()}>
      <IntlProvider defaultLocale='mn' locale='mn' messages={appMessages.mn}>
        <Head />
        <Layout/>
    </IntlProvider>
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages: [
    appMessages,
    headerMessages,
    footerMessages,
  ],
  requireAuthenticatedUser: true,
  hydrateAuthenticatedUser: true,
  handlers: {
    config: () => {
      mergeConfig({
        ENABLE_LEARNER_RECORD_MFE: (process.env.ENABLE_LEARNER_RECORD_MFE || false),
        LEARNER_RECORD_MFE_BASE_URL: process.env.LEARNER_RECORD_MFE_BASE_URL,
        COLLECT_YEAR_OF_BIRTH: process.env.COLLECT_YEAR_OF_BIRTH,
      }, 'App loadConfig override handler');
    },
  },
});
