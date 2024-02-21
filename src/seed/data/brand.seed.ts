import * as crypto from 'node:crypto';
import { Brand } from '../../brands/entities/brand.entity';

export const BRAND_SEED: Brand[] = [
  {
    id: crypto.randomUUID(),
    name: 'Toyota',
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Honda',
    createdAt: new Date().toISOString(),
  },
  {
    id: crypto.randomUUID(),
    name: 'Ford',
    createdAt: new Date().toISOString(),
  },
];
