var cvs2 = document.getElementById('seekbar');
var ctx2 = cvs2.getContext('2d');

function Seekbar(cvs2, time){
  var me = this;
  this.x = 0;
  this.y = 0;
  this.previousX = 0;
  this.isDragged = false;

  var length = cvs2.width;
  var height = cvs2.height;

  if(!me.isDragged){
    me.x = time;
  }


  this.drawA = function(ctx2){
    ctx2.strokeStyle = "black";
    ctx2.strokeRect(0, 0, length, 100);
    ctx2.stroke();

  };

  this.drawRedLine = function(ctx2){
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = "red";
    ctx2.beginPath();
    ctx2.moveTo(me.x, 0);
    ctx2.lineTo(me.x, height);
    ctx2.stroke();
  }


  window.addEventListener("mousedown", function(e){
    var dx = Math.abs(e.layerX - time);
    if(dx < 5){
      clearInterval(animation)
      me.isDragged = true;
      me.x = e.layerX;
      isPaused = true;
    }
  });

  window.addEventListener("mouseup", function(){
    console.log("up")
    me.isDragged = false;
    isPaused = false;
  });

  window.addEventListener("mousemove", function(e){
    if(me.isDragged){
      me.x = e.layerX;
      me.previousX = e.layerX;
    }
  })
}
