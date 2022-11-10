import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length } from 'class-validator'

@InputType('ProductUpdateInput')
export class ProductUpdateInput {
  @Field({ nullable: false })
  @IsUUID()
  id: string //criamos o dto pq precisamos do id

  @Field({ nullable: true })
  @Length(3)
  name: string

  @Field({ nullable: true })
  @Length(10)
  description: string

  @Field({ nullable: true })
  @Length(3)
  slug: string

  @Field({ nullable: true })
  @IsUUID()
  category: string //id
}
