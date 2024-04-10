import { PrismaService } from 'src/global/prisma-service/prisma-service.service'
import { CreateUserDto } from '../../dtos/create-user.dto'
import { User } from '../../entities/user.entity'
import { IUserRepository } from '../interfaces/IUsersRepository'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersRepository implements IUserRepository {
  constructor(private repository: PrismaService) {}

  async create({ cpf, email, name, password }: CreateUserDto): Promise<User> {
    const user = await this.repository.user.create({
      data: { cpf, email, name, password },
    })
    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.user.findUnique({ where: { id } })
    return user
  }

  async findAll(): Promise<User[]> {
    const users = await this.repository.user.findMany()
    return users
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.user.findUnique({ where: { email } })
    return user
  }

  async delete(id: string): Promise<User> {
    const user = await this.repository.user.delete({ where: { id } })
    return user
  }
}
