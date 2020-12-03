import { ApiProperty } from '@nestjs/swagger'

export class CarDto {
    @ApiProperty({
        required: true
    })
    readonly carBrand: string;

    @ApiProperty({
        required: true
    })
    readonly carSerialNumber: string 
}