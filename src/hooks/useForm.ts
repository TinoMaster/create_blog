import { useEffect, useRef, useState } from "react";
import { IPrincipalSection, ISectionBlog } from "../types/blog.type";
import { blogs } from "../data/blogs";
import { TSectionPage } from "../types/categories.type";
import {
  validateSection,
  validateSectionPrincipal,
} from "../validators/form.validator";
import { ISaveImageRes, blogService } from "../services/blog.service";
import { useDispatch, useSelector } from "react-redux";
import { setPrincipalRD, setSectionRD } from "../redux/reducers/blog/blogSlice";
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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  /* EFFECTS */
  useEffect(() => {
    if (sectionPage !== "principal") {
      setSection({ ...blogs.initialSection, type: sectionPage });
    }
    setPrincipalContent(blogs.initialPrincipalSection);
    setError("");
    formRef.current?.reset;
  }, [sectionPage]);

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
        dispatch(setPrincipalRD(principalContent));
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

  const completeSectionInfo = async () => {
    section.id = sections.length + 1;
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
    if (sectionPage !== "principal") {
      setSection({
        ...section,
        [e.target.name]: e.target.value,
        type: sectionPage,
      });
    }
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
