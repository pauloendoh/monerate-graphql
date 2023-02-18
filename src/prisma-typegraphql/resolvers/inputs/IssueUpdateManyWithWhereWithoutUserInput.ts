import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyMutationInput } from "../inputs/IssueUpdateManyMutationInput";

@TypeGraphQL.InputType("IssueUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class IssueUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => IssueScalarWhereInput, {
    nullable: false
  })
  where!: IssueScalarWhereInput;

  @TypeGraphQL.Field(_type => IssueUpdateManyMutationInput, {
    nullable: false
  })
  data!: IssueUpdateManyMutationInput;
}
