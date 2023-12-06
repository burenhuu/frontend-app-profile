import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@edx/frontend-component-header';
import Footer from '@edx/frontend-component-footer';

import { ProfilePage, NotFoundPage } from './profile';

import './index.scss';

export default function Layout(){
  useEffect(() => {
      const dropdownItems = document.getElementsByClassName('dropdown-item');
      Array.prototype.forEach.call(dropdownItems, function(item) {
          if (item.textContent === 'Бүртгэл') {
              item.href = 'https://apps.surgalt.mojha.gov.mn/account';
          }
      });
  }, []);
  return(
    <>
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
