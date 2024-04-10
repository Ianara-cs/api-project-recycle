import { Inject, Injectable } from '@nestjs/common'
import { IUserRepository } from '../repositories/interfaces/IUsersRepository'
import { CreateUserDto } from '../dtos/create-user.dto'
import { User } from '../entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @Inject('usersRepository')
    private usersRepository: IUserRepository,
  ) {}

  async createUser(createUser: CreateUserDto): Promise<User> {
    const newUser = await this.usersRepository.create(createUser)
    return newUser
  }
}
