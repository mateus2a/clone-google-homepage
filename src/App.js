/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import BurgerIcon from './assets/images/burger-icon.svg';
import CircleFrame from './assets/images/circle-frame.svg';
import Logo from './assets/images/logo.svg';
import MoreIcon from './assets/images/more-icon.svg';


import './assets/styles/global.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <header class="menu">
        <div class="menu__section left">
          <img class="menu__icon" src={BurgerIcon} alt="Burger" />
          <a class="menu__link active">All</a>
          <a class="menu__link">Images</a>
        </div>

        <div class="menu__section right">
          <img class="menu__icon" src={MoreIcon} />

          <div class="menu__profile">
              <img class="menu__avatar--frame" src={CircleFrame} />
            <img
              class="menu__avatar"
              src="https://api.adorable.io/avatars/285/10@adorable.io.png"
            />
          </div>
        </div>
      </header>

      <main class="content">
        <img class="content__logo" src={Logo} alt="UI Clone" />

        <input class="content__search" type="text" />

        <div class="content__offer">
          Made with 💜 by
          <a href="https://github.com/mateus2a" target="_blank"> Mateus Alencar</a> for studying
          purposes
        </div>
      </main>

      <footer class="footer">
        <div class="footer__section footer__location">
          <span>Brazil</span>
        </div>

        <div class="footer__section footer__links">
          <a>Settings</a>
          <a>Privacy</a>
          <a>Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
