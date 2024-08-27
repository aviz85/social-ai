import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  datePublished?: SortOrder;
  id?: SortOrder;
  isPublished?: SortOrder;
  likesCount?: SortOrder;
  updatedAt?: SortOrder;
};
