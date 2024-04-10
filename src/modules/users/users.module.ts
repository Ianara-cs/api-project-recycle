import { Module } from '@nestjs/common'
import { UsersRepository } from './repositories/implementations/users.repository'
import { UsersService } from './services/users.service'
import { UsersController } from './controllers/users.controller'

@Module({
  providers: [
    {
      provide: 'usersRepository',
      useClass: UsersRepository,
    },

    UsersService,
  ],
  controllers: [UsersController],
})
export class UsersModule {}
