class Shape {
    area() {
        return 0;
    }

    perimeter() {
        return 0;
    }

}

class Square extends Shape {
    constructor(a) {
        super();
        this.a = a;
    }

    area() {
        console.log("Area of Square is ", this.a ** 2);
    }

    perimeter() {
        console.log("Perimeter of Square is ", this.a * 4);
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        console.log("Area of Rectangle is ", this.width * this.height);
    }

    perimeter() {
        console.log("Perimeter of Triangle is ", (this.width + this.height) * 2);
    }
}

class Triangle extends Shape {
    constructor(base, h, a, b, c) {
        super();
        this.base = base;
        this.height = h;
        this.a = a;
        this.b = b;
        this.c = c;
    }

    area() {
        console.log("Area of Triangle is ", this.base * this.height / 2);
    }

    perimeter() {
        console.log("Perimeter of Triangle is ", this.a + this.b + this.c);
    }
}


var sq = new Square(4);
sq.area();

var rect = new Rectangle(5, 4);
rect.area();
rect.perimeter();

var tri = new Triangle(7, 8, 3, 4, 5);
tri.area();
tri.perimeter();
