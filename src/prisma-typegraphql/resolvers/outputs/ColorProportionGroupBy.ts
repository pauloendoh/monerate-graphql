import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ColorProportionAvgAggregate } from "../outputs/ColorProportionAvgAggregate";
import { ColorProportionCountAggregate } from "../outputs/ColorProportionCountAggregate";
import { ColorProportionMaxAggregate } from "../outputs/ColorProportionMaxAggregate";
import { ColorProportionMinAggregate } from "../outputs/ColorProportionMinAggregate";
import { ColorProportionSumAggregate } from "../outputs/ColorProportionSumAggregate";

@TypeGraphQL.ObjectType("ColorProportionGroupBy", {
  isAbstract: true
})
export class ColorProportionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mixedColorId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  rawColorId!: string;

  @TypeGraphQL.Field(_type => DecimalJSScalar, {
    nullable: false
  })
  proportion!: Prisma.Decimal;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => ColorProportionCountAggregate, {
    nullable: true
  })
  _count!: ColorProportionCountAggregate | null;

  @TypeGraphQL.Field(_type => ColorProportionAvgAggregate, {
    nullable: true
  })
  _avg!: ColorProportionAvgAggregate | null;

  @TypeGraphQL.Field(_type => ColorProportionSumAggregate, {
    nullable: true
  })
  _sum!: ColorProportionSumAggregate | null;

  @TypeGraphQL.Field(_type => ColorProportionMinAggregate, {
    nullable: true
  })
  _min!: ColorProportionMinAggregate | null;

  @TypeGraphQL.Field(_type => ColorProportionMaxAggregate, {
    nullable: true
  })
  _max!: ColorProportionMaxAggregate | null;
}
