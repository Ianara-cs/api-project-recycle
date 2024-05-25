import { CreateProfileDto } from '../../dtos/create-profile.dto'
import { Profile } from '../../entities/profile.entity'

export interface IProfilesRepository {
  createProfile(createProfileDto: CreateProfileDto): Promise<Profile>
  findProfileById(id: string): Promise<Profile>
  updateDescriptionProfile(id: string, description: string): Promise<Profile>
}
