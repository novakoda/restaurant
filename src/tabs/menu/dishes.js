export const menuDishes = () => {
  let cont = document.getElementById('menu-container');
  cont.innerHTML = `
    <div class="menu-grid">
      <div class="menu-item">
        <div id="pizza" class="menu-item-pic">
          <h3>Pizza</h3>
        </div>
        <p class="menu-item-info">You should get this if you don't trust any of the other food on the menu</p>
        <h4 class="menu-item-price">$16.99</h4>
      </div>

      <div class="menu-item">
        <div id="spaghetti" class="menu-item-pic">
          <h3>Spaghetti</h3>
        </div>
        <p class="menu-item-info">Classic mom's spagetti. Just make sure not to vomit on your sweater afterwards</p>
        <h4 class="menu-item-price">$11.99</h4>
      </div>

      <div class="menu-item">
        <div id="lasagna" class="menu-item-pic">
          <h3>Lasagna</h3>
        </div>
        <p class="menu-item-info">Has more layers than an onion with two shirts and jackets on</p>
        <h4 class="menu-item-price">$13.99</h4>
      </div>

      <div class="menu-item">
        <div id="pasta" class="menu-item-pic">
          <h3>Pasta</h3>
        </div>
        <p class="menu-item-info">A plate of pasta and beans for those of us balling on a budget</p>
        <h4 class="menu-item-price">$5.99</h4>
      </div>

      <div class="menu-item">
        <div id="rollatini" class="menu-item-pic">
          <h3>Rollatini</h3>
        </div>
        <p class="menu-item-info">Some kind of lasagna-type dish that looks pretty good but I'm not sure what it is</p>
        <h4 class="menu-item-price">$9.99</h4>
      </div>

      <div class="menu-item">
        <div id="calzone" class="menu-item-pic">
          <h3>Calzone</h3>
        </div>
        <p class="menu-item-info">A mobile version of a pizza that you can put in your pocket</p>
        <h4 class="menu-item-price">$8.99</h4>
      </div>

      <div class="menu-item">
        <div id="scaloppine" class="menu-item-pic">
          <h3>Scaloppine</h3>
        </div>
        <p class="menu-item-info">A thin piece of meat so you can have a full meal without breaking your diet</p>
        <h4 class="menu-item-price">$10.99</h4>
      </div>

      <div class="menu-item">
        <div id="piccata" class="menu-item-pic">
          <h3>Fish</h3>
        </div>
        <p class="menu-item-info">For those of you who sense that something fishy is going on here</p>
        <h4 class="menu-item-price">$12.99</h4>
      </div>

      <div class="menu-item">
        <div id="vitello" class="menu-item-pic">
          <h3>Vitello</h3>
        </div>
        <p class="menu-item-info">Mayonayse-tuna cream served on a slice of cold meat for maximum grossness</p>
        <h4 class="menu-item-price">$7.99</h4>
      </div>

    </div>
  `;
}
