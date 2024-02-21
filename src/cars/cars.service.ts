import { Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { NewCarDto } from './dto/new-car.dto';
import * as crypto from 'node:crypto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];

  findAll() {
    return this.cars;
  }

  findOne(id: string) {
    return this.cars.find((car) => car.id === id);
  }

  create(carDto: NewCarDto) {
    this.cars.push({
      id: crypto.randomUUID(),
      ...carDto,
    });
    return this.cars;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findOne(id);
    if (!car) throw new Error('Car not found');
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        return {
          ...car,
          ...updateCarDto,
        };
      }
      return car;
    });
    return this.cars;
  }

  delete(id: string) {
    this.cars = this.cars.filter((car) => car.id !== id);
    return this.cars;
  }

  loadCarsFromSeed(carsData: Car[]) {
    this.cars = carsData;
    return this.cars;
  }
}
