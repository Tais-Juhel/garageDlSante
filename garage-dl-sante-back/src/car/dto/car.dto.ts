import { ApiProperty, ApiRequestTimeoutResponse } from '@nestjs/swagger'

export class CarDto {
    @ApiProperty({
        required: true
    })
    readonly carBrand: string;

    @ApiProperty({
        required: true
    })
    readonly carSerialNumber: string 

    @ApiProperty({
        required: true
    })
    readonly customerId: number
}