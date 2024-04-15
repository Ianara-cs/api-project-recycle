import { CreateCompanyDto } from '../../dtos/create-company.dto'
import { Company } from '../../entities/company.entities'

export interface ICompanyRepository {
  create(createCompany: CreateCompanyDto): Promise<Company>
}
