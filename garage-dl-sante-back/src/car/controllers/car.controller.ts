import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CarService } from '../services/car.service';
import { Car } from '../car.entity'
import { CarDto } from '../dto/car.dto'

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Get()
    getAll(): Promise<Car[]> {
        return this.carService.findAll();
    }

    @Get('/:id')
    getOne(@Param('id') id: number): Promise<Car> {
        return this.carService.read(id);
    }

    @Post()
    create(@Body() carDto: CarDto): Promise<Car> {
        return this.carService.create(carDto);
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() carDto: CarDto): Promise<Car> {
        return this.carService.update(id, carDto)
    }

    @Delete('/:id')
    delete(@Param('id') id: number): Promise<Car> {
        return this.carService.delete(id)
    }
}