////////////////get date now


var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var d = new Date();
  var m= month[d.getMonth()];
  document.getElementById("month").innerHTML = m;

  var date = d.getDate();
  document.getElementById("date").innerHTML = date;

  var y = d.getFullYear();
  document.getElementById("year").innerHTML = y;