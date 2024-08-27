import { RecommendationWhereInput } from "./RecommendationWhereInput";
import { RecommendationOrderByInput } from "./RecommendationOrderByInput";

export type RecommendationFindManyArgs = {
  where?: RecommendationWhereInput;
  orderBy?: Array<RecommendationOrderByInput>;
  skip?: number;
  take?: number;
};
