import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Customer } from '../customer.entity'
import { CustomerDto } from '../dto/customer.dto'


@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) {}

    async findAll(): Promise<Customer[]> {
        return await this.customerRepository.find();
    }

    async read(customerId: number):  Promise<Customer> {
        return await this.customerRepository.findOne({ where: { customerId }})
    }

    async create(customerDto: CustomerDto){
        const customer = new Customer()
        customer.customerName = customerDto.customerName
        customer.customerFirstName = customerDto.customerFirstName
        await this.customerRepository.save(customer)
        return customer
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