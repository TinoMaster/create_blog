import { useEffect, useState } from "react";
import { IBlogForm, IPrincipalSection, ISectionBlog } from "../types/blog.type";
import { blogs } from "../data/blogs";
import { TCategory } from "../types/categories.type";
import {
  validateSection,
  validateSectionPrincipal,
} from "../validators/form.validator";
import { useLocalStorage } from "./useLocalStorage";

export const useForm = (category: TCategory, image: File | null) => {
  /* States */
  const [value, setValue] = useLocalStorage("form");
  const [form, setForm] = useState<IBlogForm>(value || blogs.initialBlog);
  const [principalContent, setPrincipalContent] = useState<IPrincipalSection>(
    blogs.initialPrincipalSection
  );
  const [section, setSection] = useState<ISectionBlog>(blogs.initialSection);
  console.log(value);
  console.log(image);

  /* //Todo: Crear la subida de la imagen cuando el usuario haga click en crear seccion */
  /* const addImage = () => {
    if (image) {
      if (category === "principal") {
        setPrincipalContent({ ...principalContent, image });
      } else {
        setSection({ ...section, content: image });
      }
    }
  }; */

  /* EFFECTS */
  useEffect(() => {
    setSection(blogs.initialSection);
    setPrincipalContent(blogs.initialPrincipalSection);
  }, [category]);
  useEffect(() => {
    setValue(form);
  }, [form]);

  /* FUNCTIONS */
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
