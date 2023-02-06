import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SalaryScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SalaryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SalaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SalaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SalaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SalaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  value?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
