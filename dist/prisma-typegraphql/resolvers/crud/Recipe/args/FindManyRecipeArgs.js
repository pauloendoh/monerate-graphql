"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRecipeArgs = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const RecipeOrderByWithRelationInput_1 = require("../../../inputs/RecipeOrderByWithRelationInput");
const RecipeWhereInput_1 = require("../../../inputs/RecipeWhereInput");
const RecipeWhereUniqueInput_1 = require("../../../inputs/RecipeWhereUniqueInput");
const RecipeScalarFieldEnum_1 = require("../../../../enums/RecipeScalarFieldEnum");
let FindManyRecipeArgs = class FindManyRecipeArgs {
    where;
    orderBy;
    cursor;
    take;
    skip;
    distinct;
};
__decorate([
    TypeGraphQL.Field(_type => RecipeWhereInput_1.RecipeWhereInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyRecipeArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeOrderByWithRelationInput_1.RecipeOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyRecipeArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => RecipeWhereUniqueInput_1.RecipeWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyRecipeArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyRecipeArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyRecipeArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [RecipeScalarFieldEnum_1.RecipeScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Object)
], FindManyRecipeArgs.prototype, "distinct", void 0);
FindManyRecipeArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyRecipeArgs);
exports.FindManyRecipeArgs = FindManyRecipeArgs;
