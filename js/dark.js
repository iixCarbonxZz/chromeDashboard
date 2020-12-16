//DARK MODE BUTTON LOGIC

///Event Listener to check the currently selected theme.
window.addEventListener("load", checkMode, false);

//Function to check the currently selected theme.
function checkMode(){
  //get mdoe variable from sites localStorage.
  var mode = localStorage.getItem("mode");
  //Get dark mode button.
  var label = document.getElementById("darkLabel");
  //Check the state of mode var.
  if(mode != ""){
    //If mode is light, use the light stylesheet and label the button dark.
    if(mode == "Light"){
      stylesheet.setAttribute("href", "css/stylesheet-default.css");
      label.innerHTML = "Dark Mode";
    }
    //If mode is dark, use the dark stylesheet and label the button light.
    else{
      stylesheet.setAttribute("href", "css/stylesheet-nocturnal.css");
      label.innerHTML = "Light Mode";
    }
  }
  //If no mode is defined default to the light stylesheet and label the button dark.
  else{
    label.innerHTML = "Dark Mode";
  }
}


function nightMode(){
  var stylesheet = document.getElementById("stylesheet");
  var label = document.getElementById("darkLabel");
  //var logo = document.getElementById("bannerImage");
  if(stylesheet.getAttribute("href") == "css/stylesheet-default.css"){
    document.getElementsByClassName("dashButton").style.transition = "background-color 0s, color 0s, background-image 0s";
    stylesheet.setAttribute("href", "css/stylesheet-nocturnal.css");
    document.getElementsByClassName("dashButton").removeAttribute("style");
    label.innerHTML = "Light Mode";
    localStorage.setItem("mode", "Dark");
    //logo.setAttribute("src", "discord-Logo-White.png");
  }
  else{
    document.getElementsByClassName("dashButton").style.transition = "background-color 0s, color 0s, background-image 0s";
    stylesheet.setAttribute("href", "css/stylesheet-default.css");
    document.getElementsByClassName("dashButton").removeAttribute("style");
    label.innerHTML = "Dark Mode";
    localStorage.setItem("mode", "Light");
    //logo.setAttribute("src", "discord-Logo-Color.png");
  }
}
