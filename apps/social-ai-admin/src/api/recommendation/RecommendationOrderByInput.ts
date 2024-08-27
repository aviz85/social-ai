import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
