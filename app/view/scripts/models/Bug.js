const DEFAULT_BUG_SIZE = 40;
const DEFAULT_BUG_VEL = 30;

class Bug {
    constructor(x, y, r = DEFAULT_BUG_SIZE) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    render() {
        fill(255, 50, 50);
        noStroke();
        circle(this.x, this.y, this.r);
    }

    update() {

    }
}