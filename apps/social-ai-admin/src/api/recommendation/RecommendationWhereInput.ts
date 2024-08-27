import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RecommendationWhereInput = {
  comments?: StringNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  rating?: FloatNullableFilter;
};
