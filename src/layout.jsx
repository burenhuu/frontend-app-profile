import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '@edx/frontend-component-header';
import Footer from '@edx/frontend-component-footer';

import { ProfilePage, NotFoundPage } from './profile';

import './index.scss';

export default function Layout(){
  useEffect(() => {
      const button = document.getElementsByClassName('menu-trigger btn btn-outline-primary d-inline-flex align-items-center pl-2 pr-3')[0]
      button.addEventListener('click', () => {
          setTimeout(function() {
              const dropdownItems = document.getElementsByClassName('dropdown-item');
              console.log("dropdownItems", dropdownItems)
              Array.prototype.forEach.call(dropdownItems, function(item) {
                  console.log("item.textContent", item.textContent)
                  if (item.textContent === 'Бүртгэл') {
                      item.href = 'https://apps.surgalt.mojha.gov.mn/account';
                  }
              });
          }, 500);
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
