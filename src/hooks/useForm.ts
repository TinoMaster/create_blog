import { useEffect, useState } from "react";
import { IBlog, IPrincipalSection, ISectionBlog } from "../types/blog.type";
import { blogs } from "../data/blogs";
import { TCategory } from "../types/categories.type";
import {
  validateSection,
  validateSectionPrincipal,
} from "../validators/form.validator";
import { useLocalStorage } from "./useLocalStorage";
import { ISaveImageRes, blogService } from "../services/blog.service";

export const useForm = (category: TCategory, image: File | null) => {
  /* States */
  const [value, setValue] = useLocalStorage("form");
  const [form, setForm] = useState<IBlog>(value || blogs.initialBlog);
  const [principalContent, setPrincipalContent] = useState<IPrincipalSection>(
    blogs.initialPrincipalSection
  );
  const [section, setSection] = useState<ISectionBlog>(blogs.initialSection);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  /* //Todo: refactorizar este hook */
  /* EFFECTS */
  useEffect(() => {
    setSection(blogs.initialSection);
    setPrincipalContent(blogs.initialPrincipalSection);
  }, [category]);
  useEffect(() => {
    setValue(form);
    // eslint-disable-next-line
  }, [form]);

  /* FUNCTIONS */
  const onSubmitPrincipal = async () => {
    setLoading(true);
    setError("");
    if (validateSectionPrincipal(principalContent) && image !== null) {
      let res: ISaveImageRes | undefined;
      if (image) {
        res = await blogService.saveImage(image);
      }
      if (res && res.success && res.location) {
        setForm({ ...form, ...principalContent, image: res.location });
        setPrincipalContent(blogs.initialPrincipalSection);
        setLoading(false);
      } else {
        setError("Error al guardar la imagen");
        setLoading(false);
      }
    } else {
      setLoading(false);
      setError("Complete los campos necesarios");
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
    setError("");
    setPrincipalContent({
      ...principalContent,
      [e.target.name]: e.target.value,
    });
  };

  const onSectionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setError("");
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
    error,
    loading,
  };
};
