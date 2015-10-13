class Vehicle {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    velocity(speed){
        this.speed += speed;
    }
}

var porsche = new Car('Porsche');
porsche.velocity(120);
