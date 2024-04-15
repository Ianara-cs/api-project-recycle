import { Body, Controller, Post } from '@nestjs/common'
import { CompanyService } from '../services/company.service'
import { CreateCompanyDto } from '../dtos/create-company.dto'
import { Company } from '../entities/company.entities'

@Controller('company')
export class CompanysController {
  constructor(private companyService: CompanyService) {}

  @Post()
  async createCompany(
    @Body() createCompanyData: CreateCompanyDto,
  ): Promise<Company> {
    const newCompany =
      await this.companyService.createCompany(createCompanyData)

    return newCompany
  }
}
