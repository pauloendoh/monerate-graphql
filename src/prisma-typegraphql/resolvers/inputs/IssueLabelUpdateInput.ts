import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IssueUpdateManyWithoutLabelsNestedInput } from "../inputs/IssueUpdateManyWithoutLabelsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutIssueLabelsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutIssueLabelsNestedInput";

@TypeGraphQL.InputType("IssueLabelUpdateInput", {
  isAbstract: true
})
export class IssueLabelUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutIssueLabelsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutIssueLabelsNestedInput | undefined;

  @TypeGraphQL.Field(_type => IssueUpdateManyWithoutLabelsNestedInput, {
    nullable: true
  })
  issues?: IssueUpdateManyWithoutLabelsNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bgColor?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
