class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    scale(coefficient) {
        this.x *= coefficient;
        this.y *= coefficient;
    }
}

let point = new Point(1, 2);
console.log(point.getX());
console.log(point.getY());

point.translate(3, 4);
console.log(point.getX());
console.log(point.getY());

point.scale(2);
console.log(point.getX());
console.log(point.getY());