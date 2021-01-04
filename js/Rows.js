function newRow(){
  // Find a <table> element with id="tableMain":
  var table = document.getElementById("tableMain");

  // Create an empty <tr> element and add it to the last position of the table:
  var row = table.insertRow(-1);

  row.setAttribute("class", "dashboard");

  // Insert new cells (<td> elements) at the 1st position of the "new" <tr> element:
  for (i = 0; i < 6; i++) {
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "<a title='Youtube' href='http://www.youtube.com' target='_blank'><div class='dashButton color-primary youtube'><i class='fab fa-youtube'></i></div></a>"
    cell1.setAttribute("class", "dashboard");
  }
}

function removeRow(){
  document.getElementById("tableMain").deleteRow(-1);
}
