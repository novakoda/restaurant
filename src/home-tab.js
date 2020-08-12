export const tabHome = () => {
  let content = document.getElementById('content');
  let h1 = document.createElement('h1');
  h1.innerHTML = "Welcome to the Retreat";
  h1.id = "welcome";

  let p = document.createElement('p');
  p.innerHTML = "A place you can always fall back to.";
  p.id = "text";

  let p1 = document.createElement('p');
  p1.innerHTML = "Sun-Thu: Noon - Midnight <br> Fri-Sat: Noon - 2 AM";
  p1.id = "hours";

  content.append(h1, p, p1);
}
