//Add CSS Hover Effects

document.addEventListener("DOMContentLoaded"), function(){
  var button = document.querySelector(".dashButton");
  var buttonLogo = document.querySelector(".dashButton > fab");

  button.addEventListener("mouseenter", function(e){
      buttonLogo.classList.add("fa-beat-fade");
  });
};
