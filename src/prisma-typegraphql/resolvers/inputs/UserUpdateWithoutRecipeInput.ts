import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateManyWithoutUserNestedInput } from "../inputs/CategoryUpdateManyWithoutUserNestedInput";
import { CurrentSavingUpdateManyWithoutUserNestedInput } from "../inputs/CurrentSavingUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExpenseUpdateManyWithoutUserNestedInput } from "../inputs/ExpenseUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WishlistItemUpdateManyWithoutUserNestedInput } from "../inputs/WishlistItemUpdateManyWithoutUserNestedInput";

@TypeGraphQL.InputType("UserUpdateWithoutRecipeInput", {
  isAbstract: true
})
export class UserUpdateWithoutRecipeInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  currentSavings?: CurrentSavingUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  wishlistItems?: WishlistItemUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExpenseUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  expenses?: ExpenseUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateManyWithoutUserNestedInput, {
    nullable: true
  })
  categories?: CategoryUpdateManyWithoutUserNestedInput | undefined;
}
