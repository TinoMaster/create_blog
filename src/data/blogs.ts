import {
  IBlogForm,
  IPrincipalSection,
  ISectionBlog,
  TCategoryBlog,
} from "../types/blog.type";

const initialBlog: IBlogForm = {
  title: "",
  description: "",
  category: "",
  content: "",
  image: "",
  sections: [],
};

const initialPrincipalSection: IPrincipalSection = {
  title: "",
  description: "",
  category: "",
  content: "",
  image: "",
};

const initialSection: ISectionBlog = {
  id: 0,
  title: "",
  category: "principal",
  content: "",
};

const categoryBlog: TCategoryBlog[] = [
  "javascript",
  "react",
  "tailwind",
  "node",
  "typescript",
  "vsCode",
  "curious",
  "ui",
  "next",
];

export const blogs = {
  initialBlog,
  initialSection,
  initialPrincipalSection,
  categoryBlog,
};
