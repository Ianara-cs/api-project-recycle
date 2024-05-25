import { Module } from '@nestjs/common'
import { UsersRepository } from './repositories/implementations/users.repository'
import { UsersService } from './services/users.service'
import { UsersController } from './controllers/users.controller'
import { ProfileRepository } from './repositories/implementations/profiles.repository'

@Module({
  providers: [
    {
      provide: 'usersRepository',
      useClass: UsersRepository,
    },
    {
      provide: 'profileRepository',
      useClass: ProfileRepository,
    },

    UsersService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
