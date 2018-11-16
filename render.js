 function render(row) {
 	var pitch = new Pitch(cvs);
 	pitch.draw(ctx);
   
    var seekbar = new Seekbar(cvs2, time);
    seekbar.drawA(ctx2);
    seekbar.drawRedLine(ctx2, time);
   
 	//console.log(row);
 	start = 3;
 	for (var i = 0; i < numCircles; i++) {
 		var circle = circles[i];

 		if (i == 0) {
 			circle.x = row[2] * 5;
 			circle.y = row[3] * 5;
 		} else {
 			circle.x = row[start + i] * 5;
 			circle.y = row[start + i + 22] * 5;

 		}

 		//円を描画
 		circle.draw(ctx);
 	}
 }

 function getCSV() {
 	var data = []
 	var req = new XMLHttpRequest();
 	req.open("get", "sample2.csv", true);
 	req.send(null);

 	req.onload = function () {
 		// convertCSVtoArray(req.responseText);
 		var result = [];
 		var tmp = req.responseText.split("\n");

 		for (var i = 0; i < tmp.length; ++i) {
 			data[i] = tmp[i].split(',');
 		}
 	}
 	return data;
 }

 function animate(data) {
 	setInterval(function () {
 		render(data[index]);
 		index++;
        console.log(data.length, time);
        time = index * 0.04 * cvs2.width / data.length;
 	}, 0.01);
 }

 var data = getCSV();
 //var csv = document.createElement("csv");
 //csv.addEventListener("load", onLoad);

 var index = 0;
 var time = 0;
 
 var rate = 1;


 animate(data);
 // var index = 0;

 // animate(data)
