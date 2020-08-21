import {tabBar} from './tab-bar.js';
import {tabHome} from './tabs/home.js';
import {clearCont, showTab} from './utils.js';

import "./index.css";
import "./assets/retreat.jpg";

tabBar();
tabHome();

let content = document.getElementById('content');
let menuCont = document.getElementById('menu-container');

let tabs = document.querySelectorAll('.main-tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', function() {
    console.log('clicked a tab');
    clearCont(content);
    showTab(tab);
  })
});
