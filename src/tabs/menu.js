import {menuTabs} from './menu/tabs';
import {menuDishes} from './menu/dishes.js';

export const tabMenu = () => {
  let content = document.getElementById('content');

  menuTabs();
  menuDishes();

  let head = document.createElement('h1');
  head.id = "about-title"
  head.innerHTML = "At The Retreat, everyone gets the privacy that they deserve.";

  let text = document.createElement('p');
  text.id = "about-text";
  text.innerHTML = "The Retreat was opened in 1984 by George Orwell as a place people could gather at to escape from the constant surveilance by Big Brother. Orwell placed a strong emphasis on remaining anonymous, which is why re require all of our guests to wear a facemask to enter. All electronic devices are banned from the premesis, as cell phones are able to track your every move and listen to each conversation. <br><br> All of our drinks are imported from France, and we have top of the line gourmet chefs preparing every meal so each plate is cooked to perfection.";

}
