import {clearCont, showTab} from '../../utils.js';

export const menuTabs = () => {
  let content = document.getElementById('content');

  let menuTabCont = document.createElement('div');
  menuTabCont.id = "menu-tabs-container";

  let tabDishes = document.createElement('li');
  tabDishes.id = 'dishes';
  tabDishes.className = 'tab menu-tab';
  tabDishes.innerHTML = 'Dishes';

  let tabWine = document.createElement('li');
  tabWine.id = 'wine';
  tabWine.className = 'tab menu-tab';
  tabWine.innerHTML = 'Wine';

  let tabDesert = document.createElement('li');
  tabDesert.id = 'desert';
  tabDesert.className = 'tab menu-tab';
  tabDesert.innerHTML = 'Desert';

  let ul = document.createElement('ul');
  ul.id = 'menu-tab-bar'
  ul.append(tabDishes, tabWine, tabDesert);
  menuTabCont.append(ul);
  content.append(menuTabCont);

  // container for actual menu
  let menuCont = document.createElement('div');
  menuCont.id = "menu-container";

  // event listener for menu tabs
  let tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', function() {
      console.log('clicked a tab');
      clearCont(menuCont);
      showTab(tab);
    })
  });

  content.append(menuCont);
}
