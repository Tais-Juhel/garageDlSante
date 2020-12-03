import { ApiProperty } from '@nestjs/swagger'

export class CustomerDto {
    @ApiProperty({
        required: true
    })
    readonly customerName: String;

    @ApiProperty({
        required: true
    })
    readonly customerFirstName: String;
}