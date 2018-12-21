function Horizon(cvs2){
  var me = this;
  var imagedata1 = ctx2.createImageData(cvs2.width, 100);
  var imagedata2 = ctx2.createImageData(cvs2.width, 100);
  var perpixel = Math.floor(68992 / cvs2.width);

  var _index = 0;
  for(var x = 0; x < cvs2.width; x++){
    var nearest = 1000;
    var nearestman = 0;
    // var possession = 0;
    var redballx_avg = 0;
    var blueballx_avg = 0;
    
    var redball = 0;
    var blueball = 0;
    
    for( ; _index < perpixel * (x+1); _index++){      
      /* ボールに一番近い選手とその所属を判別 */
      for(var k = 0; k < 22; k++){
        var distance = Math.pow(data[_index][3+k] - data[_index][2], 2) + Math.pow(data[_index][25+k] - data[_index][3], 2);
        if(distance < nearest){
          nearest = distance;
          nearestman = Math.floor(k / 11);
        }
      }
      /* ボールを持ってるチームのインクリメント */
      if(nearestman == 0){
        blueball++;
        blueballx_avg = blueballx_avg + Number(data[_index][2]);
      }else if(nearestman == 1){
        redball++;
        redballx_avg = redballx_avg + (105 - Number(data[_index][2]));
      }
      
      if(redballx_avg < 0){
        redballx_avg = 0;
      }
      if(blueballx_avg < 0){
        blueballx_avg = 0;
      }
    }
    redballx_avg = redballx_avg / perpixel;
    blueballx_avg = blueballx_avg / perpixel;
    
    if(redballx_avg < 10 && nearestman == 1){
      redballx_avg = 10;
    }
    if(blueballx_avg < 10 && nearestman == 0){
      blueballx_avg = 10;
    }

    for(var y = 49; y > 49 - (redballx_avg * 0.5 - 3); y--){
      var i = 4 * x + 4 * y * cvs2.width;
      imagedata1.data[i] = 255;
      imagedata1.data[i+1] = 87;
      imagedata1.data[i+2] = 87;
      imagedata1.data[i+3] = 160;
      i += 4;
    }
    for(var y = 50; y < 50 + blueballx_avg * 0.5 - 3; y++){
      var i = 4 * x + 4 * y * cvs2.width;
      if(imagedata1.data[i] == 0){
        imagedata1.data[i] = 25;
        imagedata1.data[i+1] = 68;
        imagedata1.data[i+2] = 255;
        imagedata1.data[i+3] = 120;
      }else{
        imagedata1.data[i] = 200;
        imagedata1.data[i+1] = 81;
        imagedata1.data[i+2] = 230;
        imagedata1.data[i+3] = 255;
      }
      i += 4;
    }
  }
  

  this.draw = function(ctx2){ 
    ctx2.strokeStyle = "black";
    ctx2.strokeRect(0, 100, cvs2.width, 100);
    ctx2.putImageData(imagedata1, 0, 100);
    ctx2.putImageData(imagedata2, 0, 200);
  };
}