//https://codepen.io/m2rt/pen/KwXgaG?editors=0110
var menuBoolean = true;
function menuDown() {
  if (menuBoolean) {
    document.querySelector('.navigation-content').style.height = "100vh";
    document.querySelector('.navigation-content').style.fontSize = "50px";
    document.querySelector('.navigation-content').style.zIndex = "1";
    document.querySelector('.line1').style.transform = "translateY(7px) rotate(45deg)";
    document.querySelector('.line2').style.width = "0";
    document.querySelector('.line3').style.transform = "translateY(-7px) rotate(-45deg)";
    document.querySelector('.menu').style.pointerEvents = "none";
    setTimeout(function() {document.querySelector('.menu').style.pointerEvents = "auto";}, 500);
      menuBoolean = false;
  }
  else {
    document.querySelector('.navigation-content').style.height = "0vh";
    document.querySelector('.navigation-content').style.zIndex = "0";
document.querySelector('.line1').style.transform = "rotate(0)";
document.querySelector('.line2').style.width = "15px";
document.querySelector('.line3').style.transform = "rotate(0)";
    document.querySelector('.navigation-content').style.fontSize = "0px";
    document.querySelector('.menu').style.pointerEvents = "none";
    setTimeout(function() {document.querySelector('.menu').style.pointerEvents = "auto";}, 500);
    menuBoolean = true;
  }

}
