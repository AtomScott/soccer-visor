function render(row) {
  var pitch = new Pitch(cvs);
  pitch.draw(ctx);

  ctx2.clearRect(0, 0, cvs2.width, cvs2.height);
  
  ballPosition.draw(ctx2);
  
  // var seekbar = new Seekbar(cvs2, time);
  if(!seekbar.isDragged){
    seekbar.x = time;
  }
  seekbar.drawA(ctx2);
  seekbar.drawRedLine(ctx2);
  
  
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

/*
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
*/





function animate(data, flag, playSpeed) {
  switch(flag) {
    case 'play':
      animation = setInterval(function () {
        
        render(data[index]);
        index = index + 1 * playDirection;
        time = index  * cvs2.width / data.length;
        output.text("Seconds: " + index / 25);
        speed.text("Seconds: " +  25 / playSpeed);
      }, playSpeed);
      break;
    case 'pause':
      clearInterval(animation);
      break;
  }
}

var output = $('h1');
var speed = $('#speedBox');
var time = 0;
var flag = 'play';
var playSpeed = 25;
var playDirection = 1;
var animation;


// var data = getCSV();

var index = 0;
var time = 0;

var rate = 1;

var cvs2 = document.getElementById('seekbar');
var ctx2 = cvs2.getContext('2d');

var seekbar = new Seekbar(cvs2);

var ballPosition;
window.addEventListener("keydown", function(){
  ballPosition = new BallPosition(cvs2);
  animate(data,flag,playSpeed);
});
// var ballPosition = new BallPosition(cvs2);

// tanimate(data,flag,playSpeed);
// var index = 0;
                  


// 再生機能  ボタンとかdata
//with jquery
$('.pause').on('click', function (e) {
 e.preventDefault();
 flag = 'pause';
 clearInterval(animation)
});

$('.play').on('click', function (e) {
 e.preventDefault();
 flag = 'play';
 animate(data,flag,playSpeed);
});

$('.faster').on('click', function (e) {
 e.preventDefault();
 playSpeed = playSpeed * 0.5;
 clearInterval(animation)
 animate(data,flag,playSpeed);
});
$('.slower').on('click', function (e) {
 e.preventDefault();
 playSpeed = playSpeed * 2;
 clearInterval(animation)
 animate(data,flag,playSpeed);
});
