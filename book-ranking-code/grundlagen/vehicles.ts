// vehicle.js
export class Vehicle {
 constructor(name) {
     this.name = name;
     this.speed = 0;
 }
 velocity(speed){
     this.speed += speed;
 }
}

export class Car extends Vehicle {
  /* [...] */
}
