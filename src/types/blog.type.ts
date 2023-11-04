export interface IBlog {
  title: string;
  description: string;
  category: TCategoryBlog | "";
  content: string;
  image: string;
  sections: ISectionBlog[];
}

export interface BlogResponse extends IBlog {
  _id: number;
  createdAt: string;
  updatedAt: string;
}

export interface IPrincipalSection extends Omit<IBlog, "sections"> {}

export type SectionType = "code" | "text" | "image" | "video" | "markdown";
export interface ISectionBlog {
  id: number;
  title?: string;
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
