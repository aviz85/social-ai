import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type RecommendationUpdateInput = {
  comments?: string | null;
  post?: PostWhereUniqueInput | null;
  rating?: number | null;
};
