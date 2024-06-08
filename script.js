// Function for more

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More About";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Close";
    moreText.style.display = "inline";
  }
}
function myFunct() {
   var dot = document.getElementById("dot");
   var moreTex = document.getElementById("mores");
   var btnTex = document.getElementById("myBtnss");
 
   if (dot.style.display === "none") {
     dot.style.display = "inline";
     btnTex.innerHTML = "More Projects";
     moreTex.style.display = "none";
   } else {
     dot.style.display = "none";
     btnTex.innerHTML = "Close";
     moreTex.style.display = "flex";
   }
}

// function for popup
function pop(){
   var pop = document.getElementById('pop');
   pop.classList.toggle('active')
}
function toggle(){
   var popup = document.getElementById('popup');
   popup.classList.toggle('active')
 }
function pop1(){
   var popup1 = document.getElementById('popup1');
   popup1.classList.toggle('active')
}
// function for scrolling button
window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("myBtns").style.display = "block";
      } else {
         document.getElementById("myBtns").style.display = "none";
      }
   }

   function topFunction() {
      $('html,body').animate({ scrollTop: 0 }, 1000);
   }

