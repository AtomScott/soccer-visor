 function render(row) {
 	var pitch = new Pitch(cvs);
 	pitch.draw(ctx);
 	console.log(row);
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
 	req.open("get", "sample.csv", true);
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
 	}, 5);
 }

 var data = getCSV()
 var index = 0;

 animate(data)
