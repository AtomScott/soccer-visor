/**
 *
 * @param {-} .
 * @throws {-} .
 * @returns {-} .
 */
function animate() {
    switch (flag) {
        case 'play':
            animation = setInterval(function () {
                let drawList = PitchDrawable.checkedDrawables();
                render(drawList);
                updateTime();
                index++;

            }, 1000 / frames_per_second * playSpeed);
            break;
        case 'pause':
            clearInterval(animation);
            break;
    }
}

function updateTime() {
    let minutes = Math.floor(index / frames_per_second / 60);
    let seconds = Math.floor(index / frames_per_second) % 60;
    $('#timeDisplay').text(`${minutes}min ${seconds}secs`);
    $('#speedDisplay').text(`Speed: x${1/playSpeed}`);
}


/**
 *
 * @param {-} .
 * @throws {-} .
 * @returns {-} .
 */
function render(drawList) {
    barContext.clearRect(0, 0, barCanvas.width, barCanvas.height);
    barContext.putImageData(barCanvasData, 0, 0);
    seekBar.draw();

    pitchContext.clearRect(0, 0, pitchCanvas.width, pitchCanvas.height);
    drawList.forEach(function (drawable) {
        drawable.draw();
    })
}

function setupCanvas(canvas) {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    var rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    var ctx = canvas.getContext('2d');
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return ctx;
}
