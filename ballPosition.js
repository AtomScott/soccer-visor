function BallPosition(cvs2){
  var me = this;
  //var ballx = 0;
  //var time = 0;    
  var imagedata = ctx2.createImageData(cvs2.width, 100);
  var perpixel = Math.floor(68992 / cvs2.width);
    
  var _index = 0;
  for(var x = 0; x < cvs2.width; x++){
    var nearest = 1000;
    var possession = 0;
    var ballx_avg = 0;
    
    var redball = 0;
    var blueball = 0;
    
    for( ; _index < perpixel * (x+1); _index++){
      /* プロトタイプ 
      if(data[_index][2] > 52.5){
        redball++;
      }else if(data[_index][2] < 52.5){
        blueball++;
      }
      */
      
      ballx_avg = ballx_avg + Number(data[_index][2]);
      if(ballx_avg < 0){
        ballx_avg = 0;
      }

      for(var k = 0; k < 22; k++){
        var distance = Math.pow(data[_index][3+k] - data[_index][2], 2) + Math.pow(data[_index][25+k] - data[_index][3], 2);
        if(distance < nearest){
          nearest = distance;
          possession = Math.floor(k / 11);
        }
      }
    }
    ballx_avg = ballx_avg / perpixel;

    //console.log("redball:"+redball+"  blueball:"+blueball);
    for(var y = 0; y < 100; y++){
      var percent = 0;
      var i = 4 * x + 4 * y * cvs2.width;
      //if(redball < blueball){
      if(possession == 1){
        //percent = Math.floor((blueball - redball / perpixel) * 255);
        //percent = 
        imagedata.data[i] = 255;
        imagedata.data[i+1] = 87;
        imagedata.data[i+2] = 87;
        imagedata.data[i+3] = 255 * ((105 - ballx_avg) / 105);
        i += 4;
      // }else if(redball > blueball){
      }else if(possession == 0){
        //percent = Math.floor((redball - blueball / perpixel) * 255);
        imagedata.data[i] = 25;
        imagedata.data[i+1] = 68;
        imagedata.data[i+2] = 255;
        imagedata.data[i+3] = 255 * (ballx_avg / 105);
        i += 4;
      }
    }
  }
  this.draw = function(ctx2){ 
    ctx2.strokeStyle = "black";
    ctx2.strokeRect(0, 100, cvs2.width, 100);
    ctx2.putImageData(imagedata, 0, 100);
  };
}
    
    /*
    //for(var i = 0; i < data.length; i++){
      ctx2.lineWidth = 0.5;
      if(data[i][2] < 52.5){
        ctx2.strokeStyle = "red";
      }else if(data[i][2] > 52.5){
        ctx2.strokeStyle = "blue";
      }
      ctx2.beginPath();
      ctx2.moveTo(me.time, 100);
      ctx2.lineTo(me.time, 200);
      ctx2.stroke();
    //}
  };
  */