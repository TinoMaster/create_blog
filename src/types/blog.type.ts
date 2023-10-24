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
  category: TCategory;
  content: string;
}

export type TCategoryBlog =
  | "javascript"
  | "react"
  | "next"
  | "ui"
  | "curious"
  | "tailwind"
  | "node"
  | "typescript"
  | "vsCode";
