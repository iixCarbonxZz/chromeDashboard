//DARK MODE BUTTON LOGIC
function nightMode(){
  var stylesheet = document.getElementById("stylesheet");
  var label = document.getElementById("darkLabel");
  //var logo = document.getElementById("bannerImage");
  if(stylesheet.getAttribute("href") == "css/stylesheet-default.css"){
    stylesheet.setAttribute("href", "css/stylesheet-nocturnal.css");
    label.innerHTML = "Light Mode";
    localStorage.setItem("mode", "Dark");
    //logo.setAttribute("src", "discord-Logo-White.png");
  }
  else{
    stylesheet.setAttribute("href", "css/stylesheet-default.css");
    label.innerHTML = "Dark Mode";
    localStorage.setItem("mode", "Light");
    //logo.setAttribute("src", "discord-Logo-Color.png");
  }
}
