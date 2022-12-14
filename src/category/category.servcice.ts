import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Category } from './entities/category.entity'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}
  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find()
  }

  async findById(id: string): Promise<Category> {
    return await this.categoryRepository.findOne({ where: { id: id } })
  }

  async create(input: Category): Promise<Category> {
    return this.categoryRepository.save(input)
  }

  async update(input: Category): Promise<Category> {
    await this.categoryRepository.update(input.id, {
      name: input.name,
      slug: input.slug
    })
    return input
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.categoryRepository.delete(id)
      return true
    } catch {
      return false
    }
  }

  async findBySlug(slug: string): Promise<Category> {
    return this.categoryRepository.findOne({ where: [{ slug }] })
  }
}
