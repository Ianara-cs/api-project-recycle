import { CreateUserDto } from '../../dtos/create-user.dto'
import { User } from '../../entities/user.entity'

export interface IUserRepository {
  create(createUser: CreateUserDto): Promise<User>
  findById(id: string): Promise<User>
  findAll(): Promise<User[]>
  findByEmail(email: string): Promise<User>
  delete(id: string): Promise<User>
}
