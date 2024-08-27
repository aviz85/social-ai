/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsDate,
  IsBoolean,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { RecommendationCreateNestedManyWithoutPostsInput } from "./RecommendationCreateNestedManyWithoutPostsInput";

@InputType()
class PostCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  datePublished?: Date | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isPublished?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  likesCount?: number | null;

  @ApiProperty({
    required: false,
    type: () => RecommendationCreateNestedManyWithoutPostsInput,
  })
  @ValidateNested()
  @Type(() => RecommendationCreateNestedManyWithoutPostsInput)
  @IsOptional()
  @Field(() => RecommendationCreateNestedManyWithoutPostsInput, {
    nullable: true,
  })
  recommendations?: RecommendationCreateNestedManyWithoutPostsInput;
}

export { PostCreateInput as PostCreateInput };
