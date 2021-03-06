import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    carId: number;

    @Column()
    carBrand: String;

    @Column()
    carSerialNumber: String

    @Column()
    customerId: number
}