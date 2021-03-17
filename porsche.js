var P718 = document.querySelector('#p718');
var P911 = document.querySelector('#p911');
var Taycan = document.querySelector('#taycan');
var Panamera = document.querySelector('#panamera');
var Macan = document.querySelector('#macan');
var Cayenne = document.querySelector('#cayenne');
var subMenu= document.querySelector('.submenu');
var subMenu2= document.querySelector('.submenu2');
var subMenu3= document.querySelector('.submenu3');
var subMenu4= document.querySelector('.submenu4');
var subMenu5= document.querySelector('.submenu5');
var subMenu6= document.querySelector('.submenu6');
var Shop = document.querySelector('#shop');
var shopItem = document.querySelector('.shop-item');
var Watch = document.getElementById('#watch');
var seeItem = document.querySelector('.see-item');

P718.addEventListener('mouseover', function(){
    subMenu.style.display = 'block';
});
P911.addEventListener('mouseover', function(){
    subMenu2.style.display = 'block';
});
Taycan.addEventListener('mouseover', function(){
    subMenu3.style.display = 'block';
});
Panamera.addEventListener('mouseover', function(){
    subMenu4.style.display = 'block';
});
Macan.addEventListener('mouseover', function(){
    subMenu5.style.display = 'block';
});
Cayenne.addEventListener('mouseover', function(){
    subMenu6.style.display = 'block';
});
Shop.addEventListener('mouseover', function(){
  shopItem.style.display = 'block';
});
Watch.addEventListener('mouseover', function(){
  seeItem.style.display = 'block';
});



P718.addEventListener('mouseout', function(){
  subMenu.style.display = 'none';
});
P911.addEventListener('mouseout', function(){
  subMenu2.style.display = 'none';
});
Taycan.addEventListener('mouseout', function(){
  subMenu3.style.display = 'none';
});
Panamera.addEventListener('mouseout', function(){
  subMenu4.style.display = 'none';
});
Macan.addEventListener('mouseout', function(){
  subMenu5.style.display = 'none';
});
Cayenne.addEventListener('mouseout', function(){
  subMenu6.style.display = 'none';
});
shopItem.addEventListener('mouseout', function(){
  shopItem.style.display = 'none';
});
seeItem.addEventListener('mouseout', function(){
  seeItem.style.display = 'none';
});



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot-items");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}

