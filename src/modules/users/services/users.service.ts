import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { IUserRepository } from '../repositories/interfaces/IUsersRepository'
import { CreateUserDto } from '../dtos/create-user.dto'
import { User } from '../entities/user.entity'
import { hash } from 'bcrypt'
import { Profile } from '../entities/profile.entity'
import { CreateProfileDto } from '../dtos/create-profile.dto'
import { IProfilesRepository } from '../repositories/interfaces/IProfilesRepository'

@Injectable()
export class UsersService {
  constructor(
    @Inject('usersRepository')
    private usersRepository: IUserRepository,
    @Inject('profileRepository')
    private profileRepository: IProfilesRepository,
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

  async createProfile({
    description,
    profilePictureUrl,
    userId,
  }: CreateProfileDto): Promise<Profile> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new NotFoundException('User not found')
    }

    const profile = await this.profileRepository.createProfile({
      description,
      profilePictureUrl,
      userId,
    })

    return profile
  }
}
