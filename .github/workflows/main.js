class Vehicle {
    constructor(jsObjectProperties){
        this.wheels = jsObjectProperties.wheels;
        this.color = jsObjectProperties.color;
        this.doors = jsObjectProperties.doors;
    }
    carInfo() {
        return `This vehicle has ${this.wheels} wheels, ${this.doors} doors and is ${this.color}.`;
    }
}


class Car extends Vehicle {
    constructor (jsObjectProperties) {
        super (jsObjectProperties);
        this.topSpeed = jsObjectProperties.topSpeed;
    }
    getTopSpeed(){
        return `The top speed of this car is ${this.topSpeed} km/h!`
    }
}


class Truck extends Vehicle {
    constructor (jsObjectProperties) {
        super (jsObjectProperties);
        this.maxLoadWeight = jsObjectProperties.maxLoadWeight;
    }
    getMaxLoadWeight(){
        return `The maximum load of this truck is ${this.maxLoadWeight} tons!`
    }
}


class VehicleFactory {
    create(type){
        switch(type){
            case "car":
                return new Car(js_car[0]);
            case "truck":
                return new Truck(js_truck[0]);
        }
    }
}

const json_car =  `[{"wheels": 4, "doors": 4, "color": "white"}]`;

const js_car = JSON.parse(json_car);

js_car[0].topSpeed = 350;


const carFactory = new VehicleFactory();
const finishedCar = carFactory.create("car");

console.log(finishedCar.carInfo());
console.log(finishedCar.getTopSpeed());

const json_truck = `[{"wheels": 18, "doors": 2, "color": "yellow"}]`;

const js_truck = JSON.parse(json_truck);

js_truck[0].maxLoadWeight = 200;


const truckFactory = new VehicleFactory();
const finishedTruck = truckFactory.create("truck");

console.log(finishedTruck.carInfo());
console.log(finishedTruck.getMaxLoadWeight());
