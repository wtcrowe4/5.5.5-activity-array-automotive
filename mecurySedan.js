//adding vehicle as a module
const VehicleModule = require("./vehicle").Vehicle

//calling from module
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage){
        //super pulls from vehicle constructor
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    //Methods
    loadPassenger(num){
        if(num + this.passenger <= this.maxPassengers){
            this.passenger += num
            console.log(this.passenger)
            return this.passenger
        } else {
            console.log('Not enough room in ' + this.make + ' for this many passengers.')
        }
    }

    start(){
        if(this.fuel > 0){
            console.log('Vroom Vroom')
            return this.started = true
        } else {
            console.log('Out of Gas')
            return this.started = false
        }
    }

    checkForService(){
        if(this.mileage > 30000){
            this.scheduleService = true
            console.log('Time for a service.')
            return this.scheduleService
        }
    }
}

let car1 = new Car('Jeep','Wrangler','2018','black', 44000)
console.log(car1)

car1.loadPassenger(6)
car1.checkForService()
car1.start()
car1.accelerate()
car1.accelerate()
car1.decelerate()
car1.stop()
