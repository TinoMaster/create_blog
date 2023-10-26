import { IPrincipalSection, ISectionBlog } from "../types/blog.type";

export const validateSectionPrincipal = (section: IPrincipalSection) => {
  if (
    section.title === "" ||
    section.description === "" ||
    section.category === "" ||
    section.content === ""
  ) {
    return false;
  }
  return true;
};

export const validateSection = (section: ISectionBlog) => {
  if (section.content === "") {
    return false;
  }
  return true;
};
