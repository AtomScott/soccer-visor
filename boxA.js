function boxA(){
  this.draw = function(ctx2){
    ctx2.beginPath();
    ctx2.strokeStyle = "darkgrey";
    ctx2.strokeRect(0, 15, cvs2.width, 115);
    ctx2.stroke();
      ctx2.lineWidth = 5;
      ctx2.closePath;
  };

}
