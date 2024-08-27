import { Post } from "../post/Post";

export type Recommendation = {
  comments: string | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  rating: number | null;
  updatedAt: Date;
};
