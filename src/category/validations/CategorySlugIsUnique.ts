import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'

import { CategoryService } from '../category.servcice'

@ValidatorConstraint({ name: 'categorySlugIsUnique', async: true })
export class CategorySlugIsUnique implements ValidatorConstraintInterface {
  constructor(private readonly categoryService: CategoryService) {}
  async validate(
    text: string,
    validationArguments: ValidationArguments
  ): Promise<boolean> {
    const category = await this.categoryService.findBySlug(text)
    if (category) {
      console.log(category)
      return false
    }
    return true
  }

  // podemos remover argss ss
  defaultMessage(args: ValidationArguments): string {
    return 'Slug must be unique'
  }
}
