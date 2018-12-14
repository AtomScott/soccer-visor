function timebar(){
  this.draw = function(ctx2){
    ctx2.beginPath();
    ctx2.fillStyle = "grey";
    ctx2.fillRect(0, 0, cvs2.width, 5);
    ctx2.closePath();
    for (var i = 0; i<=cvs2.width; i += cvs2.width/45*5){
        ctx2.beginPath();
        ctx2.lineWidth = 2;
        ctx2.moveTo(i, 6);
        ctx2.lineTo(i, 10);
        ctx2.strokeStyle = "black";
        ctx2.stroke();
    }
  };
}
