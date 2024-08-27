import { Recommendation } from "../recommendation/Recommendation";

export type Post = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  datePublished: Date | null;
  id: string;
  isPublished: boolean | null;
  likesCount: number | null;
  recommendations?: Array<Recommendation>;
  updatedAt: Date;
};
