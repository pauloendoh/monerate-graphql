import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseScalarWhereInput } from "../inputs/ExpenseScalarWhereInput";
import { ExpenseUpdateManyMutationInput } from "../inputs/ExpenseUpdateManyMutationInput";

@TypeGraphQL.InputType("ExpenseUpdateManyWithWhereWithoutCategoriesInput", {
  isAbstract: true
})
export class ExpenseUpdateManyWithWhereWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ExpenseScalarWhereInput, {
    nullable: false
  })
  where!: ExpenseScalarWhereInput;

  @TypeGraphQL.Field(_type => ExpenseUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExpenseUpdateManyMutationInput;
}
