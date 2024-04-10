import { Body, Controller, Post } from '@nestjs/common'
import { UsersService } from '../services/users.service'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dtos/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserData: CreateUserDto): Promise<User> {
    const user = await this.usersService.createUser(createUserData)

    return user
  }
}
