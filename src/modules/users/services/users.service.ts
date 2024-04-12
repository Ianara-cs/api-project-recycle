import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { IUserRepository } from '../repositories/interfaces/IUsersRepository'
import { CreateUserDto } from '../dtos/create-user.dto'
import { User } from '../entities/user.entity'
import { hash } from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @Inject('usersRepository')
    private usersRepository: IUserRepository,
  ) {}

  async createUser({
    cpf,
    email,
    name,
    password,
  }: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.findByEmail(email)

    if (user) {
      throw new BadRequestException('User already exists!')
    }

    const saltOrRounds = 10
    const passwordHash = await hash(password, saltOrRounds)

    const newUser = await this.usersRepository.create({
      cpf,
      email,
      name,
      password: passwordHash,
    })

    return newUser
  }
}
