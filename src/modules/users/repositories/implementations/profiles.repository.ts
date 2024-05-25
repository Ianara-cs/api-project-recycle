import { PrismaService } from 'src/global/prisma-service/prisma-service.service'
import { Profile } from '../../entities/profile.entity'
import { IProfilesRepository } from '../interfaces/IProfilesRepository'
import { CreateProfileDto } from '../../dtos/create-profile.dto'

export class ProfileRepository implements IProfilesRepository {
  constructor(private repository: PrismaService) {}

  async createProfile(createProfileDto: CreateProfileDto): Promise<Profile> {
    const newProfile = await this.repository.profile.create({
      data: createProfileDto,
    })

    return newProfile
  }

  async findProfileById(id: string): Promise<Profile> {
    const profile = await this.repository.profile.findUnique({ where: { id } })

    return profile
  }

  async updateDescriptionProfile(
    id: string,
    description: string,
  ): Promise<Profile> {
    const profile = await this.repository.profile.update({
      where: { id },
      data: { description },
    })

    return profile
  }
}
