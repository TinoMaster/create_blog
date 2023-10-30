import { IPrincipalSection, ISectionBlog } from "../types/blog.type";

export const validateSectionPrincipal = (section: IPrincipalSection) => {
  if (
    section.title === "" ||
    section.description === "" ||
    section.category === undefined ||
    section.content === ""
  ) {
    return false;
  }
  return true;
};

export const validateSection = (section: ISectionBlog) => {
  if (section.type !== "image" && section.content === "") {
    return false;
  }
  return true;
};
