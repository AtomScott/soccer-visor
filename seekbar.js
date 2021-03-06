var cvs2 = document.getElementById('seekbar');
var ctx2 = cvs2.getContext('2d');

function Seekbar(cvs2){
  var me = this;
  this.x = 0;
  this.y = 0;
  this.isDragged = false;

  var length = cvs2.width;
  var height = cvs2.height;


  this.drawRedLine = function(ctx2){
    ctx2.lineWidth = 1;
    ctx2.strokeStyle = "black";
    ctx2.beginPath();
    ctx2.moveTo(me.x, 0);
    ctx2.lineTo(me.x, height);
    ctx2.stroke();
    ctx2.closePath();
  };

  window.addEventListener("mousedown", function(e){
    var dx = Math.abs(e.layerX - me.x);
    if(dx < 15){
      me.isDragged = true;
      me.x = e.layerX;
      //isPaused = true;
    }
  });

  window.addEventListener("mouseup", function(){
    clearInterval(animation)
    me.isDragged = false;
    time = me.x ;
    index = Math.floor(time /  cvs2.width * data.length);
    animate(data,flag,playSpeed);

  });

  window.addEventListener("mousemove", function(e){
    if(me.isDragged){
      me.x = e.layerX;
    }
  });
}
