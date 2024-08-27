import { RecommendationCreateNestedManyWithoutPostsInput } from "./RecommendationCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  author?: string | null;
  content?: string | null;
  datePublished?: Date | null;
  isPublished?: boolean | null;
  likesCount?: number | null;
  recommendations?: RecommendationCreateNestedManyWithoutPostsInput;
};
