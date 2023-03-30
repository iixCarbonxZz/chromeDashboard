//Add CSS Hover Effects

document.addEventListener("DOMContentLoaded", function(){
  var button = document.querySelectorAll(".dashButton");
  var buttonLogo = document.querySelectorAll(".dashButton > .fab .fas");

    for(let i=0; i< button.length; i++){
        button[i].addEventListener("mouseenter", function(e){
        buttonLogo[i].classList.add("fa-beat-fade");
        button[i].addEventListener("mouseleave", function(e){
        buttonLogo[i].classList.remove("fa-beat-fade");
    });
  });
};
