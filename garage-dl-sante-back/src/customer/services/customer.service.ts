import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Customer } from '../customer.entity'
import { CustomerDto } from '../dto/customer.dto'
import { Car } from '../../car/car.entity'


@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
        @InjectRepository(Car)
        private readonly carRepository: Repository<Car>
    ) {}

    async findAll(): Promise<Customer[]> {
        return await this.customerRepository.find();
    }

    async read(customerId: number):  Promise<Customer> {
        return await this.customerRepository.findOne({ where: { customerId }})
    }

    async findAllCarsOfCustomer(customerId: number): Promise<Car[]> {
        return await this.carRepository.find({ where: { customerId }})
    }

    async create(customerDto: CustomerDto){
        const customerEntity = new Customer()
        customerEntity.customerName = customerDto.customerName
        customerEntity.customerFirstName = customerDto.customerFirstName
        await this.customerRepository.save(customerEntity)
        return customerEntity
    }

    async update(customerId: number, data: Partial<CustomerDto>) {
        await this.customerRepository.update({ customerId }, data);
        const car = await this.customerRepository.findOne({ where: { customerId }});
        return car;
    }

    async delete(customerId: number){
        const customer = this.customerRepository.findOne({ where: { customerId }})
        await this.customerRepository.delete({ customerId })
        return customer
    }
}