import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length } from 'class-validator'

@InputType('CategoryInputUpdate')
export class CategoryUpdateInput {
  @Field()
  @IsUUID()
  id: string

  @Length(5)
  @Field()
  name: string

  @Length(5)
  @Field()
  slug: string
}
