let bug;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);

    bug = new Bug(windowWidth / 2, windowHeight / 2);
}

function draw() {
    background(0);
    bug.render();
}