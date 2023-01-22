import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RecipeScalarWhereInput", {
  isAbstract: true
})
export class RecipeScalarWhereInput {
  @TypeGraphQL.Field(_type => [RecipeScalarWhereInput], {
    nullable: true
  })
  AND?: RecipeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeScalarWhereInput], {
    nullable: true
  })
  OR?: RecipeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RecipeScalarWhereInput], {
    nullable: true
  })
  NOT?: RecipeScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
