import { Inject, Injectable } from '@nestjs/common'
import { ICompanyRepository } from '../repositories/interfaces/ICompanyRepository'
import { CreateCompanyDto } from '../dtos/create-company.dto'
import { Company } from '../entities/company.entities'

@Injectable()
export class CompanyService {
  constructor(
    @Inject('companyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async createCompany(createCompany: CreateCompanyDto): Promise<Company> {
    const newCompany = await this.companyRepository.create(createCompany)
    return newCompany
  }
}
