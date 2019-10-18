import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: object[];
    astronauts: object[];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass(items: Payload[]): number {
        let cargoMass: number = 0;
        for (let i = 0; i < this.cargoItems.length; i++) {
            cargoMass += cargoMass[i].massKg;
        }
        let astronautMass: number = 0;
        for (let i = 0; i <this.astronauts.length; i++) {
            astronautMass += astronautMass[i].massKg;
        }
        return cargoMass + astronautMass;
    }

    currentMassKg(): number {

        return;
    }

    canAdd(item: Payload): boolean {

        return;
    }

    addCargo(cargo: Cargo) {

        return;
    }

    addAstronaut(astronaut: Astronaut) {

        return;
    }
}