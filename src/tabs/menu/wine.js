export const menuWine = () => {
  let cont = document.getElementById('menu-container');
  cont.innerHTML = `
    Note: We only sell bottles, not glasses.
    <div class="menu-grid">

      <div class="menu-item">
        <div id="airen" class="menu-item-pic">
          <h3>Airen</h3>
        </div>
        <h4 class="menu-item-price">$139.99</h4>
      </div>

      <div class="menu-item">
        <div id="blanc" class="menu-item-pic">
          <h3>Blanc</h3>
        </div>
        <h4 class="menu-item-price">$119.99</h4>
      </div>

      <div class="menu-item">
        <div id="cabernet" class="menu-item-pic">
          <h3>Cabernet</h3>
        </div>
        <h4 class="menu-item-price">$189.99</h4>
      </div>

      <div class="menu-item">
        <div id="chardonnay" class="menu-item-pic">
          <h3>Chardonnay</h3>
        </div>
        <h4 class="menu-item-price">$209.99</h4>
      </div>

      <div class="menu-item">
        <div id="garnacha" class="menu-item-pic">
          <h3>Garnacha</h3>
        </div>
        <h4 class="menu-item-price">$169.99</h4>
      </div>

      <div class="menu-item">
        <div id="merlot" class="menu-item-pic">
          <h3>Merlot</h3>
        </div>
        <h4 class="menu-item-price">$139.99</h4>
      </div>

      <div></div>

      <div class="menu-item">
        <div id="tempranillo" class="menu-item-pic">
          <h3>Tempranillo</h3>
        </div>
        <h4 class="menu-item-price">$189.99</h4>
      </div>

    </div>

  `;
}
