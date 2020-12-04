import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity'
import { CustomerController } from './controllers/customer.controller';
import { CustomerService } from './services/customer.service';
import { Car } from '../car/car.entity'

@Module({
    imports: [TypeOrmModule.forFeature([Customer, Car])],
    providers: [CustomerService],
    controllers: [CustomerController],
})
export class CustomerModule {}
