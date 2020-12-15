//Nightmode button logic.
document.getElementById("stylesheet").addEventListener("load", checkMode());

function checkMode(){
  var mode = localStorage.getItem("mode");
  var label = document.getElementById("darkLabel");
  if(mode != ""){
    if(mode == "Light"){
      stylesheet.setAttribute("href", "css/stylesheet-default.css");
      label.innerHTML = "Dark Mode";
    }
    else{
      stylesheet.setAttribute("href", "css/stylesheet-nocturnal.css");
      label.innerHTML = "Light Mode";
    }
  }
  else{
    label.innerHTML = "Dark Mode";
  }
}

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
