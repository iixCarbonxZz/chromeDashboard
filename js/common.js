//Add CSS Hover Effects

document.addEventListener("DOMContentLoaded", function(){
  var button = document.querySelectorAll(".dashButton");
  var buttonLogo = document.querySelectorAll(".dashButton > .buttonLogo");
  var roblox = document.querySelectorAll(".robloxLogo");

    for(let i=0; i< button.length; i++){
        button[i].addEventListener("mouseenter", function(e){
        buttonLogo[i].classList.add("fa-beat-fade");
        });
        button[i].addEventListener("mouseleave", function(e){
        buttonLogo[i].classList.remove("fa-beat-fade");
        });
    };
    for(let i=0; i< roblox.length; i++){
      roblox[i].addEventListener("mouseenter", function(e){
      roblox[i].classList.add("fa-rotate-by");
      roblox[i].style.cssText("--fa-rotate-angle: 45deg;");
      });
      roblox[i].addEventListener("mouseleave", function(e){
      roblox[i].classList.add("fa-rotate-by");
      roblox[i].style.cssText("--fa-rotate-angle: 45deg;");
      });
    };
});
