import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GlobalModule } from './global/global.module'
import { UsersModule } from './modules/users/users.module'
import { CompanyModule } from './modules/company/company.module'

@Module({
  imports: [GlobalModule, UsersModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
