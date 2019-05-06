

menu.onclick = function myfunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'navbar') {
    x.className += 'responsive';
  } else {
    x.className = 'navbar';
  }
}


/* Кнопка */

var form_btn = document.getElementsByClassName("icon_btn");



 /* РАБОЧИЙ КОД */


    var acc = document.getElementsByClassName("accardion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var accardion_cont = this.nextElementSibling;
    if (accardion_cont.style.maxHeight){
        accardion_cont.style.maxHeight = null;
    } else {
        accardion_cont.style.maxHeight =accardion_cont.scrollHeight + "px";
    } 
  });
}
 

