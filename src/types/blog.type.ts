import { TCategory } from "./categories.type";

export interface IBlog {
  title: string;
  description: string;
  category: TCategoryBlog;
  content: string;
  image: string;
  sections: ISectionBlog[];
}

export interface IPrincipalSection extends Omit<IBlog, "sections" | "image"> {
  image: File | "";
}

export type SectionType = "code" | "text" | "image" | "video";
export interface ISectionBlog {
  id: number;
  title?: string;
  category: TCategory;
  type: SectionType;
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
