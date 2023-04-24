import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NhFavoriteCreateNestedManyWithoutAuthorInput } from "../inputs/NhFavoriteCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("NhAuthorCreateWithoutUserInput", {
  isAbstract: true
})
export class NhAuthorCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  checkedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  favorites?: NhFavoriteCreateNestedManyWithoutAuthorInput | undefined;
}
