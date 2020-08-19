import {tabBar} from './tab-bar.js';
import {tabHome} from './tabs/home.js';
import {tabAbout} from './tabs/about.js';

import "./index.css";
import "./assets/retreat.jpg";

tabBar();
tabHome();

let tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', function() {
    console.log('clicked a tab');
    clearCont();
    showTab(tab);
  })
});

const clearCont = () => {
  let content = document.getElementById('content');
  content.innerHTML = "";
};

const showTab = (tab) => {
  tab.id === 'home' ? tabHome() : tab.id === 'menu' ? tabMenu() : tab.id === 'about' ? tabAbout() : tabContact();
};
