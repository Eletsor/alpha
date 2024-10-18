  

 var modal = document.getElementById('myModal');
 var btn = document.getElementById("myBtn");
 var span = document.getElementsByClassName("close")[0];
 btn.onclick = function() {
  modal.style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
  }
}

var modal = document.getElementById('myModaly');
 var btn = document.getElementById("myBtny");
 var span = document.getElementsByClassName("close")[0];
 btn.onclick = function() {
  modal.style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
  }
}




var modal = document.getElementById('myModalx');
 var btn = document.getElementById("myBtnx");
 var span = document.getElementsByClassName("close")[0];
 btn.onclick = function() {
  modal.style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
  }
}


var mainNav = document.querySelector('.navbarinner-sm');

window.onscroll = function() {
    windowScroll();
};

function windowScroll() {
mainNav.classList.toggle("f-nav", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
}















