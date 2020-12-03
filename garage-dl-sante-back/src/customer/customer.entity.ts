import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    customerId: number;

    @Column()
    customerName: String;

    @Column()
    customerFirstName: String
}