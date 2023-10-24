import { useEffect, useState } from "react";
import { IBlog, IPrincipalSection, ISectionBlog } from "../types/blog.type";
import { blogs } from "../data/blogs";
import { TCategory } from "../types/categories.type";

export const useForm = (category: TCategory) => {
  const [form, setForm] = useState<IBlog>(blogs.initialBlog);
  const [principalContent, setPrincipalContent] = useState<IPrincipalSection>(
    blogs.initialPrincipalSection
  );
  const [section, setSection] = useState<ISectionBlog>(blogs.initialSection);

  console.log(principalContent);
  console.log(section);

  useEffect(() => {
    setSection(blogs.initialSection);
    setPrincipalContent(blogs.initialPrincipalSection);
  }, [category]);

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
      setForm({
        ...form,
        sections: [...form.sections, section],
      });
      setSection(blogs.initialSection);
    }
  };
  const onPrincipalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPrincipalContent({
      ...principalContent,
      [e.target.name]: e.target.value,
    });
  };
  const onSectionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSection({ ...section, [e.target.name]: e.target.value, category });
  };

  return {
    form,
    section,
    principalContent,
    onSectionChange,
    onPrincipalChange,
    onSubmitSection,
    onSubmitPrincipal,
  };
};
