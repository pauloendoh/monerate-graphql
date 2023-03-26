import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MixedColorWhereUniqueInput } from "../../../inputs/MixedColorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneMixedColorArgs {
  @TypeGraphQL.Field(_type => MixedColorWhereUniqueInput, {
    nullable: false
  })
  where!: MixedColorWhereUniqueInput;
}
