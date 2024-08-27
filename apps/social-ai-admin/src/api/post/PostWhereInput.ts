import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";

export type PostWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  datePublished?: DateTimeNullableFilter;
  id?: StringFilter;
  isPublished?: BooleanNullableFilter;
  likesCount?: IntNullableFilter;
  recommendations?: RecommendationListRelationFilter;
};
