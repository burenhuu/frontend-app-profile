import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';

import Header, { messages as headerMessages } from '@edx/frontend-component-header';
import Footer, { messages as footerMessages } from '@edx/frontend-component-footer';

import appMessages from './i18n';
import { ProfilePage, NotFoundPage } from './profile';
import configureStore from './data/configureStore';

import './index.scss';
import Head from './head/Head';

export default function Layout(){
  useEffect(() => {
      const dropdownItems = document.querySelectorAll('.dropdown-item');
      dropdownItems.forEach((item) => {
        if (item.textContent === 'Бүртгэл') {
          item.href = 'your_link_here';
        }
      });
  }, []);
  return(
    <>
        <Head />
        <Header />
        <main>
          <Switch>
            <Route path="/u/:username" component={ProfilePage} />
            <Route path="/notfound" component={NotFoundPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </main>
        <Footer />
    </>
  )
}
