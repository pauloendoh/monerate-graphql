import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NhAuthorWhereUniqueInput } from "../../../inputs/NhAuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneNhAuthorArgs {
  @TypeGraphQL.Field(_type => NhAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: NhAuthorWhereUniqueInput;
}
