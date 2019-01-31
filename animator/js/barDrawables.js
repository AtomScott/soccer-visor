class SeekBar {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.isDragged = false;

        this.cvs = barCanvas;
        this.ctx = barContext;

        let length = barCanvas.width;
        let height = barCanvas.height;

        const me = this;
        this.cvs.addEventListener("mousedown", function (e) {
            let dx = Math.abs(e.layerX - me.x);
            if (dx < 15) {
                me.isDragged = true;
                me.x = e.layerX;
            }
        });

        window.addEventListener("mouseup", function () {
            if (me.isDragged) {
                clearInterval(animation)
                me.isDragged = false;
                if (data.length > 0) {
                    // console.log(`${this.x}, ${barCanvas.width}, ${data.length}`)
                    index = Math.floor(me.x / barCanvas.width * data.length);
                }
                animate();
            }
        });

        window.addEventListener("mousemove", function (e) {
            if (me.isDragged) {
                me.x = e.layerX;
            }
        });
    }

    draw() {
        let ctx = this.ctx;
        ctx.lineWidth = 1;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(this.x, 0);
        ctx.lineTo(this.x, BarDrawable.barHeight());
        ctx.stroke();
        ctx.closePath();
    }

}


let barDrawableInstances = [];
let barCanvasData;

class BarDrawable {
    constructor(name, height) {


        this.name = name;
        this.height = height;
        this.cvs = barCanvas;
        this.ctx = barContext;

        this.x = 0;
        this.y = BarDrawable.barHeight();

        // Make all drawables retrievable by keeping them in a static array
        barDrawableInstances.push(this);
    }

    static drawAll() {
        barDrawableInstances.forEach(function (drawable) {
            drawable.draw();
        })
        barCanvasData = barContext.getImageData(0, 0, barCanvas.width, barCanvas.height);
    }

    static barHeight() {
        let h = 0;
        barDrawableInstances.forEach(function (drawable) {
            h += drawable.height;
        })
        return h;
    }

}

class TimeBar extends BarDrawable {
    constructor(name, height) {
        super(name, height)
    }

    draw() {
        let ctx = this.ctx;
        let cvs = this.cvs;

        ctx.beginPath();
        ctx.fillStyle = "grey";
        ctx.fillRect(this.x, this.y, cvs.width, 5);
        ctx.closePath();
        for (var i = 0; i <= cvs.width; i += cvs.width / 45 * 5) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo(i, 6);
            ctx.lineTo(i, 10);
            ctx.strokeStyle = "black";
            ctx.stroke();

        }
    }
}

class HorizonBar extends BarDrawable{
    constructor(name,height){
        super(name, height)
    }

    draw(){
        
    }
}