import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CustomerService } from '../services/customer.service'
import { Customer } from '../customer.entity'
import { CustomerDto } from '../dto/customer.dto'

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    getAll(): Promise<Customer[]> {
        return this.customerService.findAll()
    }

    @Get('/:id')
    getOne(@Param('id') id: number): Promise<Customer> {
        return this.customerService.read(id)
    }

    @Post()
    create(@Body() customerDto: CustomerDto): Promise<Customer> {
        return this.customerService.create(customerDto)
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() customerDto: CustomerDto): Promise<Customer> {
        return this.customerService.update(id, customerDto)
    }

    @Delete('/:id')
    delete(@Param('id') id: number): Promise<Customer> {
        return this.customerService.delete(id)
    }
}