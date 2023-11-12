document.querySelector('#shopping-cart-button').onclik = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};
