export const menuDesert = () => {
  let cont = document.getElementById('menu-container');
  cont.innerHTML = `
  <div class="menu-grid desert-grid">
    <div class="menu-item">
      <div id="churros" class="menu-item-pic">
        <h3>Churros</h3>
      </div>
      <p class="menu-item-info">Sweet cinna-sugary goodness with a side of chocolate</p>
      <h4 class="menu-item-price">$2.99</h4>
    </div>

    <div class="menu-item">
      <div id="pasteis" class="menu-item-pic">
        <h3>Pasteis</h3>
      </div>
      <p class="menu-item-info">Baked goodies with a fruity paste in the center</p>
      <h4 class="menu-item-price">$1.99</h4>
    </div>

    <div class="menu-item">
      <div id="smores" class="menu-item-pic">
        <h3>Smores</h3>
      </div>
      <p class="menu-item-info">Made fresh over the campfire in the kitchen</p>
      <h4 class="menu-item-price">$2.99</h4>
    </div>

    <div class="menu-item">
      <div id="tiramisu" class="menu-item-pic">
        <h3>Tiramisu</h3>
      </div>
      <p class="menu-item-info">Pretty much cake... I think</p>
      <h4 class="menu-item-price">$2.99</h4>
    </div>
  </div>
  `;
}
