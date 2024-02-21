import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private carService: CarsService,
    private brandService: BrandsService,
  ) {}
  loadSeeds() {
    this.carService.loadCarsFromSeed(CARS_SEED);
    this.brandService.loadBrandsFromSeed(BRAND_SEED);
    return 'Seeds loaded successfully';
  }
}
