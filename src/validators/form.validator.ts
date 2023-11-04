import { IBlog, IPrincipalSection, ISectionBlog } from "../types/blog.type";

export const validateSectionPrincipal = (section: IPrincipalSection) => {
  if (
    section.title === "" ||
    section.description === "" ||
    section.category === undefined
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

export const validateForm = (form: IBlog) => {
  if (form.title === "" || form.description === "" || form.category === "") {
    return false;
  }
  return true;
};
