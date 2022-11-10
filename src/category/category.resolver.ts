import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CategoryService } from './category.servcice'
import { CategoryPublic } from './dto/category'
import { CategoryCreateInput } from './dto/category-create.input'
import { CategoryUpdateInput } from './dto/category-update.input'
import { CategoryMapper } from './dto/category.mapper'

@Resolver(of => CategoryPublic)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}
  @Query(returns => [CategoryPublic], { name: 'getAllCategories' })
  async getAllCategories(): Promise<CategoryPublic[]> {
    return this.categoryService.findAll()
  }

  @Query(returns => CategoryPublic, { name: 'getCategoryById' })
  async getCategoryById(@Args('id') id: string): Promise<CategoryPublic> {
    return await this.categoryService.findById(id)
  }

  @Mutation(returns => CategoryPublic, { name: 'createCategory' })
  async createCategory(
    @Args('input') input: CategoryCreateInput
  ): Promise<CategoryPublic> {
    return this.categoryService.create(CategoryMapper.toEntity(input))
  }

  @Mutation(returns => CategoryPublic, { name: 'updateCategory' })
  async updateCategory(
    @Args('input') input: CategoryUpdateInput
  ): Promise<CategoryPublic> {
    return this.categoryService.update(input)
  }

  @Mutation(returns => Boolean, { name: 'deleteCategory' })
  async deleteCategory(@Args('id') input: string): Promise<boolean> {
    return this.categoryService.delete(input)
  }
}
