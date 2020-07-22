import { ObjectType, Field, ID, Int } from "type-graphql";
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { __Type } from "graphql";

@ObjectType({ description: "The Product model" })
export  class Product {
    @Field(() => ID)
    id: String;  

    @Field()
    @Property()
    name: String;

    @Field()
    @Property()
    description: String;

    @Field()
    @Property()
    size: String;

    @Field()
    @Property()
    image: String;

    @Field(_type => Int)
    @Property()
    price: number;
}


export const ProductModel = getModelForClass(Product);


