import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Car } from '../car.entity'
import { CarDto } from '../dto/car.dto'

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car)
        private readonly carRepository: Repository<Car>,
    ) {}

    async findAll(): Promise<Car[]> {
        return await this.carRepository.find();
    }

    async read(carId: number): Promise<Car> {
        return await this.carRepository.findOne({ where: { carId }})
    }

    async create(carDto: CarDto) {
        const carEntity = new Car();
        carEntity.carBrand = carDto.carBrand;
        carEntity.carSerialNumber = carDto.carSerialNumber;
        carEntity.customerId = carDto.customerId;
        const car = this.carRepository.create(carEntity);
        await this.carRepository.save(car);
        return car;
    }

    async update(carId: number, data: Partial<CarDto>) {
        await this.carRepository.update({ carId }, data);
        const car = await this.carRepository.findOne({ where: { carId }});
        return car;
    }

    async delete(carId: number) {
        const car = await this.carRepository.findOne({ where: { carId }})
        await this.carRepository.delete({ carId })
        return car
    }
}