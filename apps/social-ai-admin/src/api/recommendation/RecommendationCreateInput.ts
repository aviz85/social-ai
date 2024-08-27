import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type RecommendationCreateInput = {
  comments?: string | null;
  post?: PostWhereUniqueInput | null;
  rating?: number | null;
};
