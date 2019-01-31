/**
 *
 * @param {-} .
 * @throws {-} .
 * @returns {-} .
 */

class ControlButton {
    constructor(name) {
        // Create the control button
        this.button = document.createElement("button");

        // Add Text
        let buttonText = document.createTextNode(name);
        this.button.appendChild(buttonText);

        // Add onclick action
        this.button.addEventListener('click', this.action);

        // Insert in the control button row
        document.getElementById("control-buttons").appendChild(this.button);

    }

    action() {
    }
}

class LoadButton extends ControlButton {
    constructor(name) {
        super(name)
    }

    action() {
        let fileName = $(":file").val().split('\\').pop();
        data = LoadButton.getCSV(`data/${fileName}`);

        // Draw barCanvas
        BarDrawable.drawAll();


        alert(`${fileName} has been loaded. Press play.`);
    }

    /**
     * Reads a csv file and passes it to a javascript array.
     *
     * @param {fname} fname - File name.
     * @returns {array}  Converted javascript array.
     */
    static getCSV(fileName) {
        let array = [];
        let req = new XMLHttpRequest();
        req.open("get", fileName, true);
        req.send(null);

        req.onload = function () {
            // convertCSVtoArray(req.responseText);
            var result = [];
            var tmp = req.responseText.split("\n");

            for (var i = 0; i < tmp.length; ++i) {
                array[i] = tmp[i].split(',');
            }
        }
        return array;
    }
}

class SlowerButton extends ControlButton {
    constructor(name) {
        super(name)
    }

    action() {
        playSpeed *= 2;
        clearInterval(animation)
        animate();
    }
}

class PlayButton extends ControlButton {
    constructor(name) {
        super(name)
    }

    action() {
        flag = "play";
        clearInterval(animation);
        animate();
    }
}

class PauseButton extends ControlButton {
    constructor(name) {
        super(name)
    }

    action() {
        flag = "play"
        clearInterval(animation);
    }
}

class FasterButton extends ControlButton {
    constructor(name) {
        super(name)
    }

    action() {
        playSpeed /= 2;
        clearInterval(animation)
        animate();
    }
}