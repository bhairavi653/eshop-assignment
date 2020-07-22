import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { Product } from "../../entities/Product";

@InputType()
export class ProductInput implements Partial<Product> {

  @Field()
  name: String;

  @Field()
  @Length(1, 255)
  description: String;

  @Field()
  size: String;

  @Field()
  image: String;

  @Field()
  price: number;

}
