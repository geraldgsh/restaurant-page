const menu = () => {
  const menu = document.createElement('a');
  menu.setAttribute('name', 'menu');
  const foodlist = document.createElement('div');
  foodlist.classList.add('foodlist', 'content');
  const container = document.createElement('div');
  container.classList.add('container');
  const row1 = document.createElement('div');
  row1.classList.add('row');
  row1.innerHTML = `
  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
    <div class="page-section">
      <h1 class="page-title">Food Menu</h1>
    </div>
  </div>`;

  const row2 = document.createElement('div');
  row2.classList.add('row');
  row2.innerHTML = `

  foodlist.appendChild(container);
  container.appendChild(row1);

  return foodlist;
}

export default menu;