import { RecommendationUpdateManyWithoutPostsInput } from "./RecommendationUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: string | null;
  content?: string | null;
  datePublished?: Date | null;
  isPublished?: boolean | null;
  likesCount?: number | null;
  recommendations?: RecommendationUpdateManyWithoutPostsInput;
};
