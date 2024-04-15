import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/global/prisma-service/prisma-service.service'
import { CreateCompanyDto } from '../../dtos/create-company.dto'
import { Company } from '../../entities/company.entities'
import { ICompanyRepository } from '../interfaces/ICompanyRepository'

@Injectable()
export class CompanyRepository implements ICompanyRepository {
  constructor(private repository: PrismaService) {}

  async create({
    cnpj,
    email,
    name,
    password,
  }: CreateCompanyDto): Promise<Company> {
    const company = await this.repository.company.create({
      data: { cnpj, email, name, password },
    })
    return company
  }
}
