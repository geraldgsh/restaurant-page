const menu = () => {

  const starterItem = [
    {
      link: 'https://thewoksoflife.com/hot-sour-soup/',
      img: 'media/szechuan.png',
      title: 'Szechuan Soup',
      meta: 'Hot / Sour / Mushroom',
      price: '$10'
    },
    {
      link: 'https://thewoksoflife.com/chinese-chicken-mushroom-soup/',
      img: 'media/chicken-mushroom.png',
      title: 'Chicken Mushroom Soup',
      meta: 'Chicken / Mushroom / Rice Wine',
      price: '$8'
    },
    {
      link: 'https://thewoksoflife.com/lotus-root-pork-soup/',
      img: 'media/lotus-pork.png',
      title: 'Lotus Pork Soup',
      meta: 'lotus root / pork',
      price: '$8'
    },
    {
      link: 'https://thewoksoflife.com/oxtail-soup/',
      img: 'media/oxtail.png',
      title: 'Oxtail Soup',
      meta: 'oxtail / radish',
      price: '$12'
    },
    {
      link: 'https://thewoksoflife.com/red-vegetable-soup-shanghai-luo-song-tang/',
      img: 'media/red-soup.png',
      title: 'Red Vegetable Soup',
      meta: 'Oxtail / Tomato',
      price: '$13'
    },
    {
      link: 'https://thewoksoflife.com/chinese-winter-melon-soup-meatballs/',
      img: 'media/winter-melon.png',
      title: 'Winter Melon Soup',
      meta: 'Winter Melon / Meatball',
      price: '$9'
    },
  ];

  const mainItem = [
    {
      link: 'https://thewoksoflife.com/steak-stir-fry/',
      img: 'media/steak-choi.png',
      title: 'STEAK STIR FRY',
      meta: 'beef / bok choy',
      price: '$15'
    },
    {
      link: 'https://thewoksoflife.com/garlic-chives-pork-cang-ying-tou/',
      img: 'media/chives-pork.png',
      title: 'CHIVE STIR FRY PORK',
      meta: 'Chives / pork',
      price: '$14'
    },
    {
      link: 'https://thewoksoflife.com/pork-belly-stir-fry-with-leeks/',
      img: 'media/pork-leek.png',
      title: 'Stir Fry Pork Leeks',
      meta: 'Leeks / Pork',
      price: '$9'
    },
    {
      link: 'https://thewoksoflife.com/oxtail-soup/',
      img: 'media/oxtail.png',
      title: 'Oxtail Soup',
      meta: 'oxtail / radish',
      price: '$12'
    },
    {
      link: 'https://thewoksoflife.com/red-vegetable-soup-shanghai-luo-song-tang/',
      img: 'media/red-soup.png',
      title: 'Red Vegetable Soup',
      meta: 'Oxtail / Tomato',
      price: '$13'
    },
    {
      link: 'https://thewoksoflife.com/chinese-winter-melon-soup-meatballs/',
      img: 'media/winter-melon.png',
      title: 'Winter Melon Soup',
      meta: 'Winter Melon / Meatball',
      price: '$9'
    },
  ];

  const amenu = document.createElement('a');
  amenu.setAttribute('name', 'menu');
  const foodlist = document.createElement('div');
  foodlist.id = 'menu';
  foodlist.classList.add('foodlist', 'content');
  
  const container = document.createElement('div');
  container.classList.add('container');
  foodlist.appendChild(container);
  
  const row1 = document.createElement('div');
  row1.classList.add('row');
  container.appendChild(row1);

  const col1 = document.createElement('div');
  col1.classList.add('col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12', 'text-center');
  row1.appendChild(col1);

  const pageSection = document.createElement('div');
  pageSection.classList.add('page-section');
  col1.appendChild(pageSection);

  const pageTitle = document.createElement('h1');
  pageTitle.classList.add('page-title');
  pageTitle.innerHTML = 'Food Menu';
  pageSection.appendChild(pageTitle);

  const row2 = document.createElement('div');
  row2.classList.add('row');
  container.appendChild(row2);

  const col2 = document.createElement('div');
  col2.classList.add('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-12', 'mb40');
  row2.appendChild(col2);

  const menuBlock =  document.createElement('div');
  menuBlock.classList.add('menu-block');
  col2.appendChild(menuBlock);

  const menuTitle1 = document.createElement('h3');
  menuTitle1.classList.add('menu-title');
  menuTitle1.innerHTML = 'Starter';
  menuBlock.appendChild(menuTitle1);

  starterItem.forEach(soup=> {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');
    menuBlock.appendChild(menuContent);

    const row = document.createElement('div');
    row.classList.add('row');
    menuContent.appendChild(row);

    const col3 = document.createElement('div');
    col3.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12');
    row.appendChild(col3);

    const dishImg = document.createElement('div');
    dishImg.classList.add('dish-img');
    col3.appendChild(dishImg);

    const aTag = document.createElement('a');
    aTag.setAttribute('href', soup.link);
    dishImg.appendChild(aTag);

    const img = document.createElement('img');
    img.setAttribute('src', soup.img)
    img.setAttribute('alt', soup.title);
    img.classList.add('img-circle')
    aTag.appendChild(img);

    const col4 = document.createElement('div');
    col4.classList.add('col-lg-9', 'col-md-9', 'col-sm-9', 'col-xs-12');
    row.appendChild(col4);
    const dishContent = document.createElement('div');
    dishContent.classList.add('dish-content');
    col4.appendChild(dishContent);

    const dishTitle = document.createElement('h5');
    dishTitle.classList.add('dish-title');
    dishTitle.innerHTML = `<a href='#'>${soup.title}</a>`
    dishContent.appendChild(dishTitle);
    const dishLink = document.createElement('a');
    dishLink.setAttribute('href', '#')
    dishLink.inner = soup.title;
    dishTitle.appendChild(dishLink);

    const dishMeta = document.createElement('span');
    dishMeta.classList.add('dish-meta');
    dishMeta.innerHTML = soup.meta
    dishContent.appendChild(dishMeta);

    const dishPrice = document.createElement('div');
    dishPrice.classList.add('dish-price');
    dishContent.appendChild(dishPrice);

    const priceTag =  document.createElement('p');
    priceTag.innerHTML = soup.price;
    dishPrice.appendChild(priceTag);    

  });

  return foodlist;
}

export default menu;