function getCSV() {
  var data = []
  var req = new XMLHttpRequest();
  req.open("get", "sample2.csv", true);
  req.send(null);
  
  req.onload = function () {
    // convertCSVtoArray(req.responseText);
    //var result = [];
    var tmp = req.responseText.split("\n");
    
    for (var i = 0; i < tmp.length; ++i) {
      data[i] = tmp[i].split(',');
    }
  } 
  return data;
}

var data = getCSV();