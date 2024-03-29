"use strict";
// Q61:Making Enums for vehicles: Lets create categories for vehicles like cars, trucks and motorcycles using enums, and show one example.
// Making a list (enum) for different types of vehicles 
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["Car"] = 0] = "Car";
    vehicleType[vehicleType["Trucks"] = 1] = "Trucks";
    vehicleType[vehicleType["Bus"] = 2] = "Bus";
})(vehicleType || (vehicleType = {}));
// showing one type of vehicles from from the list
console.log(vehicleType.Car);
