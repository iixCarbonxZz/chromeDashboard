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
    stylesheet.setAttribute("href", "css/stylesheet-default.css");
    label.innerHTML = "Dark Mode";
  }
}
