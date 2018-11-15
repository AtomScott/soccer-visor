 function render(row) {
 	var pitch = new Pitch(cvs);
 	pitch.draw(ctx);
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

 var output = $('h1');
 var time = 0;
 var isPaused = false;
 var playSpeed = 40;
 var changeSpeed = 40;
 var playDirection = 1;

 function animate(data) {
 	setInterval(function () {
 		if (!isPaused) {
 			render(data[index]);
 			index = index + 1 * playDirection;
 			output.text("Seconds: " + index / 25);
			playSpeed = changeSpeed;
 		}
 	}, playSpeed);
 }

 var data = getCSV()
 var index = 0;

 animate(data)

 // 再生機能  ボタンとか
 //with jquery
 $('.pause').on('click', function (e) {
 	e.preventDefault();
 	isPaused = true;
 });

 $('.play').on('click', function (e) {
 	e.preventDefault();
 	isPaused = false;
 });

 $('.fforward').on('click', function (e) {
 	e.preventDefault();
 	changeSpeed = changeSpeed * 2;
 });

