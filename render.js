
function render(row) {
    var pitch = new Pitch(cvs);
    pitch.draw(ctx);
    ctx2.clearRect(0, 0, cvs2.width, cvs2.height);
    ballPosition.draw(ctx2);

    if(!seekbar.isDragged){
      seekbar.x = time;
    }
    
    timebar.draw(ctx2);
    seekbar.drawRedLine(ctx2);

    ball_start_index = 2;
    player_start_index = 3;
    scale = cvs.width / 105;
    var newRow = [];
    for (var i = 0; i < numCircles; i++) {
        var circle = circles[i];
        if (i == 0) {
            circle.x = row[ball_start_index] * scale;
            circle.y = row[ball_start_index+1] * scale;
        } else {
            circle.x = row[player_start_index + i] * scale;
            circle.y = row[player_start_index + i + 22] * scale;
            newRow.push([circle.x,circle.y])
        }
        circle.draw(ctx);
     }  
    
    /*-- Voronoi etc. -*/
        var voronoi = d3.voronoi()
    .extent([[-1, -1], [cvs.width + 1, cvs.height + 1]]);

        var diagram = voronoi(newRow),
         links = diagram.links(),
         polygons = diagram.polygons();

    if ($('#vorCheck').is(':checked')){
  ctx.beginPath();
  for (var i = 0, n = polygons.length; i < n; ++i){
    ctx.strokeStyle = "rgba(0,255.0,255.0,0.5)";
ctx.beginPath();
  drawCell(polygons[i]);
      if (i<11){
  ctx.fillStyle = "rgba(0,0,255.0,0.5)";
  ctx.fill();
      }else{
            ctx.fillStyle = "rgba(255.0,0,0,0.5)";
  ctx.fill();

      }

  ctx.stroke();

  }
    }
    if ($('#delCheck').is(':checked')){
  ctx.beginPath();
  for (var i = 0, n = links.length; i < n; ++i) drawLink(links[i]);
  ctx.strokeStyle = "rgba(255.0,255.0,0,0.5)";
  ctx.stroke();
    }
    /* Voronoi etc.ここまで*/
    
}

function getCSV(fname) {
 var data = []
 var req = new XMLHttpRequest();
 req.open("get", fname, true);
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

var animation;
function animate(data, flag, playSpeed) {
    switch(flag) {
    case 'play':
            frames_per_second = 25
            animation = setInterval(function () {
                render(data[index]);
                index = index + 1 * playDirection;
                time = index  * cvs2.width / data.length;
                var minutes = Math.floor(index / frames_per_second /60);
                var seconds = Math.floor(index / frames_per_second)%60;
                time_display.text(`${minutes}min ${seconds}secs`);
                speed_display.text("Seconds: " +  frames_per_second / playSpeed);
            }, playSpeed);
            break;
    case 'pause':
            clearInterval(animation);
            break;
    }
}
/*-------------------------------------------
---------------------------------------------
Main
---------------------------------------------
-------------------------------------------*/
var time_display = $('#timeDisplay');
var speed_display = $('#speedDisplay');
var time = 0;
var flag = 'play';
var playSpeed = 25;
var playDirection = 1;
var animation;
var index = 0;
var rate = 1;
var seekbar = new Seekbar(cvs2);
var timebar = new timebar(cvs2);
var boxA = new boxA(cvs2);
var data = getCSV("sample2.csv");
console.log(data);

window.addEventListener("keydown", function(){
  ballPosition = new BallPosition(cvs2);
    clearInterval(animation)
  animate(data,flag,playSpeed);
});

/*　Buttons */
$('.pause').on('click', function (e) {
 e.preventDefault();
 flag = 'pause';
 clearInterval(animation)
});

$('.play').on('click', function (e) {
 e.preventDefault();
 flag = 'play';
 clearInterval(animation)
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

