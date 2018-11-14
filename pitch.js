var cvs = document.getElementById('pitch');
var ctx = cvs.getContext('2d');
function Pitch(cvs) {
	this.height = cvs.height;
	this.width = cvs.width;
	this.wscale = this.width / 105;
	this.hscale = this.height / 68;

	this.draw = function (ctx) {
		// Outer lines
		ctx.beginPath();
		ctx.rect(0, 0, this.width, this.height);
		ctx.fillStyle = "#060";
		ctx.fill();
		ctx.lineWidth = 3;
		ctx.strokeStyle = "#FFF";
		ctx.stroke();
		ctx.closePath();

		ctx.fillStyle = "#FFF";

		// Mid line
		ctx.beginPath();
		ctx.moveTo(this.width / 2, 0);
		ctx.lineTo(this.width / 2, this.height);
		ctx.stroke();
		ctx.closePath();

		//Mid circle
		ctx.beginPath()
		ctx.arc(this.width / 2, this.height / 2, 9.15 * this.hscale, 0, 2 * Math.PI, false);
		ctx.stroke();
		ctx.closePath();
		//Mid point
		ctx.beginPath()
		ctx.arc(this.width / 2, this.height / 2, 2, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.closePath();

		//Home penalty box
		ctx.beginPath();
		ctx.rect(0, this.height / 2 - 16.5 * this.wscale, 16.5 * this.wscale, this.height / 2);
		ctx.stroke();
		ctx.closePath();
		//Home goal box
		ctx.beginPath();
		ctx.rect(0, this.height / 2 - 8.1 * this.hscale, 5.5 * this.wscale, 16.5 * this.hscale);
		ctx.stroke();
		ctx.closePath();
		//Home goal 
		ctx.beginPath();
		ctx.moveTo(1, (this.height / 2) - 22 / this.wscale);
		ctx.lineTo(1, (this.height / 2) + 22 / this.wscale);
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.closePath();
		ctx.lineWidth = 1;

		//Home penalty point
		ctx.beginPath()
		ctx.arc(11 * this.wscale, this.height / 2, 3, 0, 2 * Math.PI, true);
		ctx.fill();
		ctx.closePath();
		//Home half circle
		ctx.lineWidth = 3;
		ctx.beginPath()
		ctx.arc(11 * this.wscale,this. height / 2, 9.15 * this.wscale, 0.29 * Math.PI, 1.71 * Math.PI, true);
		ctx.stroke();
		ctx.closePath();

		//Away penalty box
		ctx.beginPath();
		ctx.rect(this.width - 16.5 * this.wscale, this.height / 2 - 16.5 * this.wscale, this.width, this.height / 2);
		ctx.stroke();
		ctx.closePath();
		//Away goal box
		ctx.beginPath();
		ctx.rect(this.width - 5.5 * this.hscale, this.height / 2 - 8.1 * this.hscale, this.width, 16.5 * this.hscale);
		ctx.stroke();
		ctx.closePath();
		//Away goal 
		ctx.beginPath();
		ctx.moveTo(this.width - 1, (this.height / 2) - 22 / this.wscale);
		ctx.lineTo(this.width - 1, (this.height / 2) + 22 / this.wscale);
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.closePath();
		ctx.lineWidth = 1;
		//Away penalty point
		ctx.beginPath()
		ctx.arc(this.width - 11 *this.wscale, this.height / 2, 3, 0, 2 * Math.PI, true);
		ctx.fill();
		ctx.closePath();
		//Away half circle
		ctx.lineWidth = 3;
		ctx.beginPath()
		ctx.arc(this.width - 11 * this.wscale, this.height / 2, 9.15 * this.wscale, 1.29 * Math.PI, 0.71 * Math.PI, true);
		ctx.stroke();
		ctx.closePath();
	};
}
