export const tabBar = () => {
  let tabHome = document.createElement('li');
  tabHome.id = 'home';
  tabHome.className = 'tab';
  tabHome.innerHTML = 'Home';

  let tabMenu = document.createElement('li');
  tabMenu.id = 'menu';
  tabMenu.className = 'tab';
  tabMenu.innerHTML = 'Menu';

  let tabAbout = document.createElement('li');
  tabAbout.id = 'about';
  tabAbout.className = 'tab';
  tabAbout.innerHTML = 'About';

  let tabContact = document.createElement('li');
  tabContact.id = 'contact';
  tabContact.className = 'tab';
  tabContact.innerHTML = 'Contact';

  let ul = document.createElement('ul');
  ul.append(tabHome, tabMenu, tabAbout, tabContact);
  let main = document.getElementById('main');
  main.append(ul);
};
