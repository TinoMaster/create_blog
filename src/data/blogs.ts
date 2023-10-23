import { IBlog, IPrincipalSection, ISectionBlog } from "../types/blog.type";

const initialBlog: IBlog = {
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
  type: "principal",
  content: "",
};

export const blogs = { initialBlog, initialSection, initialPrincipalSection };
