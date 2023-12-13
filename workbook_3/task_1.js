function createPoint(x, y) {
    return {
        getX: function() {
            return x;
        },
        getY: function() {
            return y;
        },
        translate: function(dx, dy) {
            x += dx;
            y += dy;
        },
        scale: function(coefficient) {
            x *= coefficient;
            y *= coefficient;
        }
    };
}

let point = createPoint(1, 2);
console.log(point.getX()); // Ожидаемый вывод: 1
console.log(point.getY()); // Ожидаемый вывод: 2

point.translate(3, 4);
console.log(point.getX()); // Ожидаемый вывод: 4
console.log(point.getY()); // Ожидаемый вывод: 6

point.scale(2);
console.log(point.getX()); // Ожидаемый вывод: 8
console.log(point.getY()); // Ожидаемый вывод: 12