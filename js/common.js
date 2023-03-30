//Add CSS Hover Effects

document.addEventListener("DOMContentLoaded", function(){
  var button = document.querySelectorAll(".dashButton");
  var buttonLogo = document.querySelectorAll(".dashButton > .fab");

    for(let i=0; i< button.length; i++){
        button.addEventListener("mouseenter", function(e){
        buttonLogo.classList.add("fa-beat-fade");
    });
  }
});
