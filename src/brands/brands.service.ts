import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import * as crypto from 'node:crypto';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [];
  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    this.brands.push({
      id: crypto.randomUUID(),
      name: name.toLowerCase(),
      createdAt: new Date().toISOString(),
    });
    return this.brands;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new Error('Brand not found');

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);
    if (!brand) throw new Error('Brand not found');
    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        return {
          ...brand,
          ...updateBrandDto,
          updatedAt: new Date().toISOString(),
        };
      }
      return brand;
    });
    return this.brands;
  }

  remove(id: string) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
    return this.brands;
  }

  loadBrandsFromSeed(brandsData: Brand[]) {
    this.brands = brandsData;
    return this.brands;
  }
}
