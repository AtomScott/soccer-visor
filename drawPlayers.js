 var circles = [];
 var numCircles = 23;

 for (var i = 0; i < numCircles; i++) {
 	if (i == 0) {
 		var circle = new Circle(0, 0, 2);
 	} else if (i < 12) {
 		var circle = new Circle(0, 0, 0);
 	} else {
 		var circle = new Circle(0, 0, 1);
 	}
 	circles.push(circle);
 }

 function Circle(x, y, type) {
 	var me = this;
 	this.x = x;
 	this.y = y;
 	this.type = type;

 	this.draw = function (ctx) {
 		ctx.beginPath();
 		if (me.type == 0) {
 			ctx.fillStyle = "blue";
 			ctx.strokeStyle = "darkblue";
 		} else if (me.type == 1) {
 			ctx.fillStyle = "red";
 			ctx.strokeStyle = "darkred";
 		} else if (me.type == 2) {
 			ctx.fillStyle = "white";
 			ctx.strokeStyle = "black";
 		}
 		ctx.arc(me.x, me.y, 10, 0, 2 * Math.PI, true);
 		ctx.fill();
 		ctx.stroke();
 	};
 }
