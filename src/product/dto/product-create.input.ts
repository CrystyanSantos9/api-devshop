import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length } from 'class-validator'

@InputType('ProductInput')
export class ProductCreateInput {
  @Field({ nullable: false })
  @Length(3)
  name: string

  @Field({ nullable: false })
  @Length(10)
  description: string

  @Field({ nullable: false })
  @Length(3)
  slug: string

  @Field({ nullable: false })
  @IsUUID()
  category: string //id
}
