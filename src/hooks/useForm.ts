import { useContext, useEffect, useRef, useState } from "react";
import { IPrincipalSection, ISectionBlog } from "../types/blog.type";
import { blogs } from "../data/blogs";
import { TCategory } from "../types/categories.type";
import {
  validateSection,
  validateSectionPrincipal,
} from "../validators/form.validator";
import { ISaveImageRes, blogService } from "../services/blog.service";
import BlogContext, { BlogContextType } from "../context/blogContext";

export const useForm = (category: TCategory, image: File | null) => {
  /* States */
  const { form, setForm } = useContext(BlogContext) as BlogContextType;
  const [principalContent, setPrincipalContent] = useState<IPrincipalSection>(
    blogs.initialPrincipalSection
  );
  const [section, setSection] = useState<ISectionBlog>(blogs.initialSection);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  /* EFFECTS */
  useEffect(() => {
    setSection(blogs.initialSection);
    setPrincipalContent(blogs.initialPrincipalSection);
    setError("");
    formRef.current?.reset;
  }, [category]);

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
        formRef.current?.reset;
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
      formRef.current?.reset;
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
    section,
    principalContent,
    onSectionChange,
    onPrincipalChange,
    onSubmitSection,
    onSubmitPrincipal,
    error,
    loading,
    formRef,
  };
};
