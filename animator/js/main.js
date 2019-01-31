// Init global variables
let flag;
let data = [];
let playSpeed = 1;
let index = 0;
let frames_per_second = 25;
// Init Canvases and Contexts
let pitchCanvas = document.getElementById('pitch');
let pitchContext = setupCanvas(pitchCanvas);
let barCanvas = document.getElementById('bar');
let barContext = setupCanvas(barCanvas);
// Init global functions
let animation, seekBar;


$(document).ready(function () {

    // Create Pitch Drawables
    let pitch = new Pitch('pitch', true);
    let ball = new Ball('ball', true);
    for (i = 0; i < 11; i++) {
        let teamA = new Player(`teamA_player${i}`, true, i, 0);
        let teamB = new Player(`teamB_player${i}`, true, i + 11, 1);
    }
    // let vor = new PitchDrawable('voronoi');
    // let del = new PitchDrawable('delunay');


    // Create Bar Drawables
    let timeBar = new TimeBar('time Bar', 15);
    // let hori
    seekBar = new SeekBar();
    barCanvas.height = BarDrawable.barHeight();

    // Set Control Buttons
    const loadButton = new LoadButton("Load");
    const slowerButton = new SlowerButton("Slower");
    const playButton = new PlayButton("Play");
    const pauseButton = new PauseButton("Pause");
    const fasterButton = new FasterButton("Faster");

})

