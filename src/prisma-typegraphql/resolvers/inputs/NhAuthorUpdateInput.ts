import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NhFavoriteUpdateManyWithoutAuthorNestedInput } from "../inputs/NhFavoriteUpdateManyWithoutAuthorNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutNhAuthorsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutNhAuthorsNestedInput";

@TypeGraphQL.InputType("NhAuthorUpdateInput", {
  isAbstract: true
})
export class NhAuthorUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  url?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutNhAuthorsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutNhAuthorsNestedInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  checkedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NhFavoriteUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  favorites?: NhFavoriteUpdateManyWithoutAuthorNestedInput | undefined;
}
