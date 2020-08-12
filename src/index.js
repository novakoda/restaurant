import {tabBar} from './tab-bar.js';
import {tabHome} from './home-tab.js';

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
  let name = "tab";
  name += tab.innerHTML;

  window[name]();
};
