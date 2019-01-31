let pitchDrawableInstances = []

class PitchDrawable {
    constructor(name, checked) {

        // Make all drawables retrievable by keeping them in a static array
        pitchDrawableInstances.push(this);

        this.name = name;
        this.cvs = pitchCanvas;
        this.ctx = pitchContext;

        // Create a div
        this.div = document.createElement("div");

        // Create a check box
        this.checkBox = document.createElement("input");
        this.checkBox.setAttribute("type", "checkbox");
        this.checkBox.checked = checked;

        // Add text and checkbox to div
        let buttonText = document.createTextNode(name);
        this.div.appendChild(buttonText);
        this.div.appendChild(this.checkBox);

        // Insert in the control button row
        document.getElementById("pitch-checkboxes").appendChild(this.div);
    }

    draw() {
    }

    scale(x) {
        let scale = pitchCanvas.width / 105;
        return x * scale;
    }

    static checkedDrawables() {
        let checkedDrawables = [];
        pitchDrawableInstances.forEach(function (drawable) {
            if (drawable.checkBox.checked) {
                checkedDrawables.push(drawable);
            }
        });
        return checkedDrawables.flat();
    }
}

class Pitch extends PitchDrawable {
    constructor(name, checked) {
        super(name, checked);
        this.height = this.cvs.height;
        this.width = this.cvs.width;
        this.wscale = this.width / 105;
        this.hscale = this.height / 68;
    }

    draw() {
        let ctx = this.ctx;
        // Outer lines
        ctx.beginPath();
        ctx.rect(0, 0, this.width, this.height);
        ctx.fillStyle = "#53900F";
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
        ctx.beginPath();
        ctx.arc(this.width / 2, this.height / 2, 9.15 * this.hscale, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        //Mid point
        ctx.beginPath();
        ctx.arc(this.width / 2, this.height / 2, 2, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();

        //Home penalty box
        ctx.beginPath();
        ctx.rect(0, this.height / 2 - 16.5 * this.hscale, 16.5 * this.wscale, this.height / 2);
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
        ctx.beginPath();
        ctx.arc(11 * this.wscale, this.height / 2, 3, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.closePath();
        //Home half circle
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(11 * this.wscale, this.height / 2, 9.15 * this.wscale, 0.29 * Math.PI, 1.71 * Math.PI, true);
        ctx.stroke();
        ctx.closePath();

        //Away penalty box
        ctx.beginPath();
        ctx.rect(this.width - 16.5 * this.wscale, this.height / 2 - 16.5 * this.hscale, this.width, this.height / 2);
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
        ctx.beginPath();
        ctx.arc(this.width - 11 * this.wscale, this.height / 2, 3, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.closePath();
        //Away half circle
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.width - 11 * this.wscale, this.height / 2, 9.15 * this.wscale, 1.29 * Math.PI, 0.71 * Math.PI, true);
        ctx.stroke();
        ctx.closePath();
    };
}

class Ball extends PitchDrawable {
    constructor(name, checked) {
        super(name, checked);

    }

    draw() {
        let row = data[index];
        this.x = this.scale(row[44]);
        this.y = this.scale(row[45]);

        let ctx = this.ctx;
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";

        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.stroke();


    }

}

class Player extends PitchDrawable {
    constructor(name, checked, id, team) {
        super(name, checked);
        this.id = id;
        this.team = team;
    }

    draw() {
        let row = data[index];
        this.x = this.scale(row[this.id]);
        this.y = this.scale(row[this.id + 22]);

        let ctx = this.ctx;
        ctx.beginPath();
        if (this.team) {

            ctx.fillStyle = "#66FCF1";
            ctx.strokeStyle = "#66FCF1";
        } else {
            ctx.fillStyle = "#FC4445";
            ctx.strokeStyle = "#FC4445";

        }
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI, true);
        ctx.fill();
        ctx.stroke();

    }
}

