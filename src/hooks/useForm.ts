import { useEffect, useRef, useState } from "react";
import { IBlog, IPrincipalSection, ISectionBlog } from "../types/blog.type";
import { blogs } from "../data/blogs";
import { TSectionPage } from "../types/categories.type";
import {
  validateForm,
  validateSection,
  validateSectionPrincipal,
} from "../validators/form.validator";
import { ISaveImageRes, blogService } from "../services/blog.service";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBlog,
  setPrincipalRD,
  setSectionRD,
} from "../redux/reducers/blog/blogSlice";
import { RootState } from "../redux/store";

export const useForm = (sectionPage: TSectionPage, image: File | null) => {
  /* Redux */
  const dispatch = useDispatch();
  const { sections } = useSelector((state: RootState) => state.blog);
  /* States */
  const [principalContent, setPrincipalContent] = useState<IPrincipalSection>(
    blogs.initialPrincipalSection
  );
  const [section, setSection] = useState<ISectionBlog>(blogs.initialSection);
  const [actualSection, setActualSection] = useState(sections.length + 1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState({ success: false, message: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  console.log(principalContent);

  /* EFFECTS */
  useEffect(() => {
    if (sectionPage !== "principal") {
      setSection({ ...blogs.initialSection, type: sectionPage });
    }
    setPrincipalContent(blogs.initialPrincipalSection);
    setError("");
    formRef.current?.reset;
  }, [sectionPage]);
  useEffect(() => {
    setActualSection(sections.length + 1);
  }, [sections]);

  /* FUNCTIONS */
  const completePrincipalInfo = (res?: ISaveImageRes) => {
    const done = () => {
      setSuccess({ success: true, message: "Seccion Principal Creada" });
      setPrincipalContent(blogs.initialPrincipalSection);
      setLoading(false);
      formRef.current?.reset;
      setTimeout(() => {
        setSuccess({ success: false, message: "" });
      }, 3000);
    };

    if (res) {
      if (res && res.success && res.location) {
        dispatch(setPrincipalRD({ ...principalContent, image: res.location }));
        done();
      } else {
        setError("Error al guardar la imagen");
        setLoading(false);
      }
    } else {
      dispatch(setPrincipalRD({ ...principalContent }));
      done();
    }
  };

  const onSubmitPrincipal = async () => {
    setLoading(true);
    setError("");
    if (validateSectionPrincipal(principalContent)) {
      let res: ISaveImageRes | undefined;
      if (image) {
        res = await blogService.saveImage(image);
        completePrincipalInfo(res);
      } else completePrincipalInfo();
    } else {
      setLoading(false);
      setError("Complete los campos necesarios");
    }
  };

  const onChangeSectionID = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActualSection(parseInt(e.target.value));
  };

  const completeSectionInfo = async () => {
    if (sectionPage === "image" && image !== null) {
      const res: ISaveImageRes = await blogService.saveImage(image);
      if (res.success && res.location) {
        section.content = res.location;
      } else setError("Error al guardar la imagen");
    }
  };

  const onSubmitSection = async () => {
    setError("");
    setLoading(true);
    if (validateSection(section)) {
      await completeSectionInfo();
      dispatch(setSectionRD(section));
      setSection(blogs.initialSection);
      formRef.current?.reset;
      setLoading(false);
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
    section.id = actualSection;
    if (sectionPage !== "principal") {
      setSection({
        ...section,
        [e.target.name]: e.target.value,
        type: sectionPage,
      });
    }
  };

  const onSubmitBlog = async (
    e: React.FormEvent<HTMLFormElement>,
    blog: IBlog
  ) => {
    e.preventDefault();
    const validation = validateForm(blog);
    if (!validation) {
      setError("Complete los campos necesarios");
      return;
    } else {
      const response = await blogService.saveBlog(blog);
      if (response.success) {
        setError("");
        setSuccess({ success: true, message: "Blog Creado con exito" });
        dispatch(clearBlog());
        setTimeout(() => {
          setSuccess({ success: false, message: "" });
        }, 3000);
      } else {
        setError("Error al guardar el blog");
      }
    }
  };

  return {
    section,
    actualSection,
    principalContent,
    onSectionChange,
    onPrincipalChange,
    onSubmitSection,
    onSubmitPrincipal,
    onChangeSectionID,
    onSubmitBlog,
    error,
    loading,
    success,
    formRef,
  };
};
