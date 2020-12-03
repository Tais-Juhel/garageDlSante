import { Controller, Get } from '@nestjs/common'
import { CarService } from '../services/car.service';
import { Car } from '../car.entity'

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Get()
    getAll(): Promise<Car[]> {
        return this.carService.findAll();
    }
}