import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueOrderByWithRelationInput } from "../../../inputs/IssueOrderByWithRelationInput";
import { IssueWhereInput } from "../../../inputs/IssueWhereInput";
import { IssueWhereUniqueInput } from "../../../inputs/IssueWhereUniqueInput";
import { IssueScalarFieldEnum } from "../../../../enums/IssueScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstIssueArgs {
  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  where?: IssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IssueOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IssueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: true
  })
  cursor?: IssueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "title" | "solution" | "isSolved" | "createdAt" | "updatedAt"> | undefined;
}
