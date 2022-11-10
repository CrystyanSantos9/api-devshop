import { Field, InputType } from '@nestjs/graphql'
import { Length, Validate } from 'class-validator'
import { CategorySlugIsUnique } from '../validations/CategorySlugIsUnique'

@InputType('CategoryInput')
export class CategoryCreateInput {
  @Field({ nullable: false })
  @Length(5) // mínimo de 5 caracteres
  name: string

  @Length(5) // mínimo de 5 caracteres
  @Field({ nullable: false })
  @Validate(CategorySlugIsUnique)
  slug: string
}
