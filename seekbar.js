var cvs2 = document.getElementById('seekbar');
var ctx2 = cvs2.getContext('2d');


function Seekbar(cvs2, time){
  var me = this;
  this.x = 0;
  this.y = 0;
      
  var length = cvs2.width;
  var height = cvs2.height;
  
  this.drawA = function(ctx2){
    ctx2.strokeStyle = "black";
    ctx2.strokeRect(0, 0, length, 100);
    ctx2.stroke();
    
  };
  
  this.drawRedLine = function(ctx2){
    ctx2.lineWidth = 2;
    ctx2.strokeStyle = "red";
    ctx2.beginPath();
    ctx2.moveTo(time, 0);
    ctx2.lineTo(time, height);
    ctx2.stroke();
  }
}