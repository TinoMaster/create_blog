import { useEffect, useState } from "react";
import { IBlog, IPrincipalSection, ISectionBlog } from "../types/blog.type";
import { blogs } from "../data/blogs";
import { TCategory } from "../types/categories.type";
import {
  validateSection,
  validateSectionPrincipal,
} from "../validators/form.validator";

export const useForm = (category: TCategory, image: File | null) => {
  /* States */
  const [form, setForm] = useState<IBlog>(blogs.initialBlog);
  const [principalContent, setPrincipalContent] = useState<IPrincipalSection>(
    blogs.initialPrincipalSection
  );
  const [section, setSection] = useState<ISectionBlog>(blogs.initialSection);
  console.log(principalContent);

  /* Effects */
  useEffect(() => {
    setSection(blogs.initialSection);
    setPrincipalContent(blogs.initialPrincipalSection);
  }, [category]);
  useEffect(() => {
    if (image) {
      const preview = URL.createObjectURL(image);
      if (category === "principal") {
        setPrincipalContent({ ...principalContent, image: preview });
      } else {
        setSection({ ...section, content: preview });
      }
    }
  }, [image]);

  /* Functions */
  const onSubmitPrincipal = () => {
    if (validateSectionPrincipal(principalContent)) {
      setForm({ ...form, ...principalContent });
      setPrincipalContent(blogs.initialPrincipalSection);
    }
  };
  const onSubmitSection = () => {
    if (validateSection(section)) {
      setForm({
        ...form,
        sections: [...form.sections, section],
      });
      setSection(blogs.initialSection);
    }
  };
  const onPrincipalChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
