import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateProfileDto {
  @ApiProperty()
  @IsNotEmpty()
  profilePictureUrl?: string

  @ApiProperty()
  @IsNotEmpty()
  description: string

  @ApiProperty()
  @IsNotEmpty()
  userId?: string
}
