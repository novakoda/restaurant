import {tabHome} from './tabs/home.js';
import {tabAbout} from './tabs/about.js';
import {tabContact} from './tabs/contact.js';
import {tabMenu} from './tabs/menu.js';

import {menuDishes} from './tabs/menu/dishes.js';
import {menuWine} from './tabs/menu/wine.js';
import {menuDesert} from './tabs/menu/desert.js';

const clearCont = (item) => {
  item.innerHTML = "";
};

const showTab = (tab) => {
  tab.id === 'home' ? tabHome() : tab.id === 'menu' ? tabMenu() : tab.id === 'about' ? tabAbout() : tab.id === 'contact' ?  tabContact() : tab.id === 'dishes' ? menuDishes() : tab.id === 'wine' ? menuWine() : menuDesert();
};

export {clearCont, showTab};
