import { useState } from "react";
import { IBlog, IPrincipalSection, ISectionBlog } from "../types/blog.type";
import { blogs } from "../data/blogs";

export const useForm = () => {
  const [form, setForm] = useState<IBlog>(blogs.initialBlog);
  const [principalContent, setPrincipalContent] = useState<IPrincipalSection>(
    blogs.initialPrincipalSection
  );
  const [section, setSection] = useState<ISectionBlog>(blogs.initialSection);

  const validateSectionPrincipal = () => {
    if (
      principalContent.title === "" ||
      principalContent.description === "" ||
      principalContent.category === "" ||
      principalContent.content === "" ||
      principalContent.image === ""
    ) {
      return false;
    }
    return true;
  };
  const validateSection = () => {
    if (section.content === "") {
      return false;
    }
    return true;
  };
  const onSubmitPrincipal = () => {
    if (validateSectionPrincipal()) {
      setForm({ ...form, ...principalContent });
      setPrincipalContent(blogs.initialPrincipalSection);
    }
  };
  const onSubmitSection = () => {
    if (validateSection()) {
      setForm({ ...form, sections: [...form.sections, section] });
      setSection(blogs.initialSection);
    }
  };
  const onPrincipalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrincipalContent({
      ...principalContent,
      [e.target.name]: e.target.value,
    });
  };
  const onSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSection({ ...section, [e.target.name]: e.target.value });
  };

  return {
    form,
    onSectionChange,
    onPrincipalChange,
    onSubmitSection,
    onSubmitPrincipal,
  };
};
