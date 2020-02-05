const navbar = () => {
  const head = document.createElement('nav');
  head.classList.add('navbar', 'navbar-expand-lg', 'navbar', 'bg-white', 'static-top');
  const container = document.createElement('div');
  container.classList.add('container');
  const logo = document.createElement('a');
  logo.classList.add('nav-brand');
  logo.setAttribute('href', 'home');
  logo.innerHTML = `<img src="media/wok-logo-small.png" alt="Logo">`;

  const siteMenu = document.createElement('div');
  siteMenu.classList.add('collapse', 'navbar-collapse');
  siteMenu.id = 'navbar-collapse';

  const unlist = document.createElement('ul');
  unlist.classList.add('navbar-nav', 'ml-auto');

  
  const navLinks = ['Home', 'Menu', 'Gallery', 'Contact'];
  const navArr = [];
  for (var i = 0; i < 4; i++) {
    const aTag = document.createElement('a');
    const liTag = document.createElement('li');
    if (i == 1) {
      aTag.setAttribute('href', '#menu');
    } else if (i == 2) {
      aTag.setAttribute('href', '#gallery');
    } else if (i == 3) {
      aTag.setAttribute('href', '#contact');
    } else {
      aTag.setAttribute('href', '#home');
    }    

    aTag.classList.add('nav-link');
    aTag.innerHTML = navLinks[i];
    liTag.classList.add('nav-item');
    liTag.appendChild(aTag);
    navArr.push(liTag);
  };

  head.appendChild(container);
  container.appendChild(logo);
  container.appendChild(siteMenu);
  unlist.appendChild(...navArr)
  siteMenu.appendChild(unlist);

  return head;
}

export default navbar;