import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrentSavingOrderByRelationAggregateInput } from "../inputs/CurrentSavingOrderByRelationAggregateInput";
import { RecipeOrderByRelationAggregateInput } from "../inputs/RecipeOrderByRelationAggregateInput";
import { WishlistItemOrderByRelationAggregateInput } from "../inputs/WishlistItemOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {
  isAbstract: true
})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  username?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RecipeOrderByRelationAggregateInput, {
    nullable: true
  })
  recipe?: RecipeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CurrentSavingOrderByRelationAggregateInput, {
    nullable: true
  })
  currentSavings?: CurrentSavingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => WishlistItemOrderByRelationAggregateInput, {
    nullable: true
  })
  wishlistItems?: WishlistItemOrderByRelationAggregateInput | undefined;
}
