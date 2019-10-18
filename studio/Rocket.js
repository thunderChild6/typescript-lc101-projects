"use strict";
exports.__esModule = true;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }
    Rocket.prototype.sumMass = function (items) {
        var cargoMass = 0;
        for (var i = 0; i < this.cargoItems.length; i++) {
            cargoMass += cargoMass[i].massKg;
        }
        return cargoMass;
    };
    Rocket.prototype.currentMassKg = function () {
        return;
    };
    Rocket.prototype.canAdd = function (item) {
        return;
    };
    Rocket.prototype.addCargo = function (cargo) {
        return;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        return;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
