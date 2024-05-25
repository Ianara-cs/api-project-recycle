import { Body, Controller, Post } from '@nestjs/common'
import { UsersService } from '../services/users.service'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dtos/create-user.dto'
import { ApiTags } from '@nestjs/swagger'
import { CreateProfileDto } from '../dtos/create-profile.dto'
import { Profile } from '../entities/profile.entity'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserData: CreateUserDto): Promise<User> {
    const user = await this.usersService.createUser(createUserData)

    return user
  }

  @Post('/profile')
  async createProfile(
    @Body() createProfileData: CreateProfileDto,
  ): Promise<Profile> {
    const profile = await this.usersService.createProfile(createProfileData)

    return profile
  }
}
