/*let products = {
  all: document.querySelectorAll('.cardV')
};
*/
var menuDumb = document.querySelector('#dumbellsopt');
var menuAcces = document.querySelector('#accesoriesopt');
var orderForm = document.querySelector('#order');

orderForm.addEventListener('click', function() {


  
});

menuDumb.addEventListener('click', function() {
  var divsCat = document.querySelectorAll('.category_accesories');
  var divsCat2 = document.querySelectorAll('.category_dumbells');

  var inter = document.querySelector('.intersections1');
  inter.innerText = 'List of Dumbells only';
  inter.style.cssText =
    'color: Red; padding-bottom: 1em; text-align: center; font-size: 2em; font-family: "Rancho", sans-serif;';

  for (var i = 0; i < divsCat2.length; i++) {
    if (divsCat2[i].style.display === 'none') {
      divsCat2[i].style.display = 'block';
    }
  }

  for (var o = 0; o < divsCat.length; o++) {
    divsCat[o].style.display = 'none';
  }
});

menuAcces.addEventListener('click', function() {
  var divsCat3 = document.querySelectorAll('.category_dumbells');
  var divsCat4 = document.querySelectorAll('.category_accesories');

  var inter = document.querySelector('.intersections1');
  inter.innerText = 'List of Accessories only';
  inter.style.cssText =
    'color: Red; padding-bottom: 1em; text-align: center; font-size: 2em; font-family: "Rancho", sans-serif;';

  for (var i = 0; i < divsCat4.length; i++) {
    if (divsCat4[i].style.display === 'none') {
      divsCat4[i].style.display = 'block';
    }
  }

  for (var o = 0; o < divsCat3.length; o++) {
    divsCat3[o].style.display = 'none';
  }
});
