import { Recommendation as TRecommendation } from "../api/recommendation/Recommendation";

export const RECOMMENDATION_TITLE_FIELD = "id";

export const RecommendationTitle = (record: TRecommendation): string => {
  return record.id?.toString() || String(record.id);
};
