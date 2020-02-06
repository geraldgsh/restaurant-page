import navbar from "./modules/navbar";
import jumbotron from "./modules/jumbotron";
import menu from "./modules/menu";
import gallery from "./modules/gallery";
// import contact from "./modules/contact";
// import socialMedia from "./modules/socialMedia";
// import footer from "./modules/footer";

const filling = document.getElementById('content');
filling.appendChild(navbar());
filling.appendChild(jumbotron());
filling.appendChild(menu());
filling.appendChild(gallery());
