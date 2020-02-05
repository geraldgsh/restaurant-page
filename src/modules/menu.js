const menu = () => {
  const amenu = document.createElement('a');
  amenu.setAttribute('name', 'menu');
  const foodlist = document.createElement('div');
  foodlist.id = 'menu';
  foodlist.classList.add('foodlist', 'content');
  foodlist.innerHTML = `
  <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
          <div class="page-section">
            <h1 class="page-title">Food Menu</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- starter -->
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40">
          <div class="menu-block">
            <h3 class="menu-title">Starter</h3>
            <div class="menu-content">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div class="dish-img"><a href="https://thewoksoflife.com/hot-sour-soup/"><img src="media/szechuan.png" alt="" class="img-circle"></a></div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <div class="dish-content">
                    <h5 class="dish-title"><a href="#">Szechuan Soup</a></h5>
                    <span class="dish-meta">Hot / Sour / Mushroom</span>
                    <div class="dish-price">
                      <p>$10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="menu-content">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div class="dish-img"><a href="https://thewoksoflife.com/chinese-chicken-mushroom-soup/"><img src="media/chicken-mushroom.png" alt="" class="img-circle"></a></div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <div class="dish-content">
                    <h5 class="dish-title"><a href="#">Chicken Mushroom Soup</a></h5>
                    <span class="dish-meta">Chicken / Mushroom / Rice Wine</span>
                    <div class="dish-price">
                      <p>$8</p>
                    </div>
                  </div>                    
                </div>
              </div>
            </div>
            <div class="menu-content">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div class="dish-img"><a href="https://thewoksoflife.com/lotus-root-pork-soup/"><img src="media/lotus-pork.png" alt="" class="img-circle"></a></div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <div class="dish-content">
                    <h5 class="dish-title"><a href="#">Lotus Pork Soup</a></h5>
                    <span class="dish-meta">lotus root / pork</span>
                    <div class="dish-price">
                      <p>$8</p>
                    </div>
                  </div>                    
                </div>
              </div>
            </div>
            <div class="menu-content">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div class="dish-img"><a href="https://thewoksoflife.com/oxtail-soup/"><img src="media/oxtail.png" alt="" class="img-circle"></a></div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <div class="dish-content">
                    <h5 class="dish-title"><a href="#">Oxtail Soup</a></h5>
                    <span class="dish-meta">oxtail / radish</span>
                    <div class="dish-price">
                      <p>$12</p>
                    </div>
                  </div>                    
                </div>
              </div>
            </div>
            <div class="menu-content">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div class="dish-img"><a href="https://thewoksoflife.com/red-vegetable-soup-shanghai-luo-song-tang/"><img src="media/corn-egg.png" alt="" class="img-circle"></a></div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <div class="dish-content">
                    <h5 class="dish-title"><a href="#">Red Vegetable Soup</a></h5>
                    <span class="dish-meta">Oxtail / Tomato</span>
                    <div class="dish-price">
                      <p>$6</p>
                    </div>
                  </div>                    
                </div>
              </div>
            </div>
            <div class="menu-content">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div class="dish-img"><a href="https://thewoksoflife.com/chinese-winter-melon-soup-meatballs/"><img src="media/winter-melon.png" alt="" class="img-circle"></a></div>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  <div class="dish-content">
                    <h5 class="dish-title"><a href="#">Winter Melon Soup</a></h5>
                    <span class="dish-meta">Winter Melon / Meatball</span>
                    <div class="dish-price">
                      <p>$9</p>
                    </div>
                  </div>                    
                </div>
              </div>
            </div>
        </div>
      </div>
      <!-- /.starter -->
      <!-- Main -->
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40">
        <div class="menu-block">
          <h3 class="menu-title">Main Course</h3>
          <div class="menu-content">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div class="dish-img"><a href="https://thewoksoflife.com/steak-stir-fry/"><img src="media/steak-choi.png" alt="" class="img-circle"></a></div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="dish-content">
                  <h5 class="dish-title"><a href="#">STEAK STIR FRY </a></h5>
                  <span class="dish-meta">beef / bok choy</span>
                  <div class="dish-price">
                    <p>$15</p>
                  </div>
                </div>                  
              </div>
            </div>
          </div>
          <div class="menu-content">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="dish-img"><a href="https://thewoksoflife.com/garlic-chives-pork-cang-ying-tou/"><img src="media/chives-pork.png" alt="" class="img-circle"></a></div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="dish-content">
                  <h5 class="dish-title"><a href="#">CHIVE STIR FRY PORK</a></h5>
                  <span class="dish-meta">Chives / pork</span>
                    <div class="dish-price">
                      <p>$14</p>
                    </div>
                  </div>                  
              </div>
            </div>
          </div>
          <div class="menu-content">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="dish-img"><a href="https://thewoksoflife.com/pork-belly-stir-fry-with-leeks/"><img src="media/pork-leek.png" alt="" class="img-circle"></a></div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="dish-content">
                  <h5 class="dish-title"><a href="#">Stir Fry Pork Leeks</a> </h5>
                  <span class="dish-meta">Leeks / Pork</span>
                  <div class="dish-price">
                    <p>$9</p>
                  </div>
                </div>                  
              </div>
            </div>
          </div>
          <div class="menu-content">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="dish-img"><a href="https://thewoksoflife.com/beef-tofu-stir-fry/"><img src="media/beef-tofu.png" alt="" class="img-circle"></a></div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="dish-content">
                  <h5 class="dish-title"><a href="#">Stir Fry Beef Tofu</a> </h5>
                  <span class="dish-meta">Beef / Tofu</span>
                  <div class="dish-price">
                    <p>$11</p>
                  </div>
                </div>                  
              </div>
            </div>
          </div>
          <div class="menu-content">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="dish-img"><a href="https://thewoksoflife.com/cashew-shrimp-stir-fry/"><img src="media/cashew-shrimp.png" alt="" class="img-circle"></a></div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="dish-content">
                  <h5 class="dish-title"><a href="#">Cashew Shrimp Stir Fry</a> </h5>
                  <span class="dish-meta">Cashew Nuts / Shrimp / Celery</span>
                  <div class="dish-price">
                    <p>$13</p>
                  </div>
                </div>                  
              </div>
            </div>
          </div>
          <div class="menu-content">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="dish-img"><a href="https://thewoksoflife.com/sweet-sour-fish-fillet/"><img src="media/sweet-sour-fish.png" alt="" class="img-circle"></a></div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="dish-content">
                  <h5 class="dish-title"><a href="#">Sweet Sour Fish Fillet</a> </h5>
                  <span class="dish-meta">Fish Fillet / Pineapple / vinegar</span>
                  <div class="dish-price">
                    <p>$12</p>
                  </div>
                </div>                  
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.main -->
      <!-- dessert -->
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb40">
        <div class="menu-block">
          <h3 class="menu-title">Dessert</h3>
          <div class="menu-content">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="dish-img"><a href="https://thewoksoflife.com/red-bean-soup/"><img src="media/red-bean.png" alt="" class="img-circle"></a></div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="dish-content">
                  <h5 class="dish-title"><a href="#">Red Bean Soup</a></h5>
                  <span class="dish-meta">Red Bean</span>
                  <div class="dish-price">
                    <p>$5</p>
                  </div>
                </div>                  
              </div>
            </div>
          </div>
          <div class="menu-content">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="dish-img"><a href="https://thewoksoflife.com/snow-fungus-soup-pears/"><img src="media/fungus.png" alt="" class="img-circle"></a></div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="dish-content">
                  <h5 class="dish-title"><a href="#">Snow Fungus Soup</a></h5>
                  <span class="dish-meta">Fungus / Asian Pear</span>
                  <div class="dish-price">
                    <p>$11</p>
                  </div>
                </div>                  
              </div>
            </div>
          </div>
          <div class="menu-content">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div class="dish-img"><a href="https://thewoksoflife.com/baobing-chinese-shaved-ice/"><img src="media/shaved-ice.png" alt="" class="img-circle"></a></div>
              </div>
              <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                <div class="dish-content">
                  <h5 class="dish-title"><a href="#">Baobing Shaved Ice</a> </h5>
                  <span class="dish-meta">Mango / Taro / Red Bean</span>
                  <div class="dish-price">
                    <p>$7</p>
                  </div>
                </div>                  
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.main Course -->
      </div>
    </div>`;

  return foodlist;
}

export default menu;