const VehicleModule = require("./vehicle").Vehicle

//calling from module
class Truck extends VehicleModule {
    constructor(make, model, year, color, mileage){
        //super pulls from vehicle constructor
        super(make, model, year, color, mileage);
        this.maxPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 6;
        this.maxSpeed = 140;
        this.fuel = 80;
        this.scheduleService = false;
        this.towLimit = 2000;
        this.tow = false
    }

    checkForService(){
        if(this.mileage > 50000){
            this.scheduleService = true;
            console.log('Time for a service.');
            return this.scheduleService;
        }
    }

    checkTow(weight) {
        if(weight <= this.towLimit){
            console.log('Hooking up your tow package.');
            return this.tow = true;
        }else{
            console.log('This '+ this.make + 'cannot pull that much weight.')
            return this.tow = false;
        }
    }

}

truck1 = new Truck('Ford','F-250','2016','white', 44000)
console.log(truck1)