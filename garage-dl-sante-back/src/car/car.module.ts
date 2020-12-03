import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car.entity'
import { CarController } from './controllers/car.controller';
import { CarService } from './services/car.service';

@Module({
    imports: [TypeOrmModule.forFeature([Car])],
    providers: [CarService],
    controllers: [CarController],
})
export class CarModule {}
