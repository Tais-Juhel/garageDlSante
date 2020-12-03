import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer.entity'
import { CustomerController } from './controllers/customer.controller';
import { CustomerService } from './services/customer.service';

@Module({
    imports: [TypeOrmModule.forFeature([Customer])],
    providers: [CustomerService],
    controllers: [CustomerController],
})
export class CustomerModule {}
