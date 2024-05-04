const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const toggleContentByTab = () => {

  let tabs = document.querySelectorAll('.products-block__tab');
  let contents = document.querySelectorAll('.products-block__wrapper');

  tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {

      tabs.forEach((tab_2) => {
        tab_2.classList.remove('active');
      })
      contents.forEach((content) => {
        content.classList.remove('active');
      })


      tab.classList.add('active');
      contents[index].classList.add('active');

    })

  })

}

toggleContentByTab();

//mobile-menu

var burger = document.querySelector('.burger');
var mobileMenu = document.querySelector(".mobile-menu");
var cross = document.querySelector('.cross');
var cross2 = document.querySelector('.cross2');

burger.addEventListener('click', () => {
  // if (burger.classList.contains ('active')) {
  //   burger.classList.remove ('active');
  //   mobileMenu.classList.remove ('active');
  // }
  // else {
  //   burger.classList.add('active');
  //   mobileMenu.classList.add('active');
  // }
  console.log(burger);
  console.log(mobileMenu);
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

cross.addEventListener('click', () => {
  burger.classList.remove('active');
  mobileMenu.classList.remove('active');
});

var cart = document.querySelector('.cart')
var cartMenu = document.querySelector('.cart-menu');
var backDrop = document.querySelector('.backdrop');

cart.addEventListener('click', () => {
  cart.classList.toggle('active');
  cartMenu.classList.toggle('active');
  backDrop.classList.toggle('active');
});

cross2.addEventListener('click', () => {
  cart.classList.remove('active');
  cartMenu.classList.remove('active');
  backDrop.classList.remove('active');
});

var products = document.querySelectorAll('.card__button');

products.forEach((product) => {
  product.addEventListener("click", () => {
    let title = document.querySelector('.card__title').innerHTML;
    let price = document.querySelector('.card__price').innerHTML;

    let products_area = document.querySelector('.cart-menu__products');

    let div = document.createElement('div');
    div.className = 'product-info';
    div.innerHTML = `<span class='product-title'>${title}</span> <span class='product-price'>${price}</span>`;
    products_area.append(div);
  });
});
