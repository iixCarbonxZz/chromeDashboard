//Add CSS Hover Effects

document.addEventListener("DOMContentLoaded", function(){
  var button = document.querySelectorAll(".dashButton");
  var buttonLogo = document.querySelectorAll(".dashButton > .fab");

  button.addEventListener("mouseenter", function(e){
      buttonLogo.classList.add("fa-beat-fade");
  });
});
