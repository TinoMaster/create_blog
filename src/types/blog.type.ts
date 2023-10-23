import { TCategory } from "./categories.type";

export interface IBlog {
  title: string;
  description: string;
  category: string;
  content: string;
  image: string;
  sections: ISectionBlog[];
}

export interface IPrincipalSection extends Omit<IBlog, "sections"> {}

export interface ISectionBlog {
  id: number;
  title?: string;
  type: TCategory;
  content: string;
}
