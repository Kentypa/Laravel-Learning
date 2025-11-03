import { Pivot } from "./pivot";

export type Author = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  pivot: Pivot;
};
