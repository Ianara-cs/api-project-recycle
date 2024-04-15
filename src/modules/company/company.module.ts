import { Module } from '@nestjs/common'
import { CompanyService } from './services/company.service'
import { CompanyRepository } from './repositories/implementatios/company.repository'
import { CompanysController } from './controllers/company.controller'

@Module({
  providers: [
    {
      provide: 'companyRepository',
      useClass: CompanyRepository,
    },

    CompanyService,
  ],
  controllers: [CompanysController],
})
export class CompanyModule {}
