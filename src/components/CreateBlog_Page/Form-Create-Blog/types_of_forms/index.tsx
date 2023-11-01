/* import { useForm } from "../../../hooks/useForm"; */
import { useForm } from "../../../../hooks/useForm";
import { useImage } from "../../../../hooks/useImage";
import { TSectionPage } from "../../../../types/categories.type";
import { Buttons } from "./Buttons";
import { Content } from "./Content";
import { Image } from "./Image";
import { Title } from "./Title";
import { CategoryBlog } from "./CategoryBlog";
import { DescriptionBlog } from "./DescriptionBlog";
import LoadingPage from "../../../Loaders/LoadingPage";
import { ErrorMessage } from "../../../Messages/Error";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { SetIDSection } from "./SetIDSection";
import { IBlog } from "../../../../types/blog.type";
import { SuccessMessage } from "../../../Messages/Success";

export const Form = () => {
  const sectionPage: TSectionPage = useSelector(
    (state: RootState) => state.section
  );
  const blog: IBlog = useSelector((state: RootState) => state.blog);
  const { onDropImage, preview, handleImageChange, image } =
    useImage(sectionPage);
  const {
    onSectionChange,
    onPrincipalChange,
    section,
    actualSection,
    principalContent,
    onSubmitPrincipal,
    onSubmitSection,
    onChangeSectionID,
    onSubmitBlog,
    error,
    loading,
    success,
    formRef,
  } = useForm(sectionPage, image);

  return (
    <form
      onSubmit={(e) => onSubmitBlog(e, blog)}
      ref={formRef}
      className="flex flex-col gap-4 relative"
    >
      {success.success && <SuccessMessage message={success.message} />}
      {error && <ErrorMessage error={error} />}
      {loading && <LoadingPage />}
      
      <SetIDSection
        onChangeSectionID={onChangeSectionID}
        actualSection={actualSection}
      />
      <CategoryBlog
        onPrincipalChange={onPrincipalChange}
        sectionPage={sectionPage}
      />
      <Title
        sectionPage={sectionPage}
        onPrincipalChange={onPrincipalChange}
        onSectionChange={onSectionChange}
        section={section}
        principalContent={principalContent}
      />
      <DescriptionBlog
        sectionPage={sectionPage}
        onPrincipalChange={onPrincipalChange}
        principalContent={principalContent}
      />
      <Image
        preview={preview}
        handleImageChange={handleImageChange}
        onDropImage={onDropImage}
        sectionPage={sectionPage}
      />
      <Content
        sectionPage={sectionPage}
        onPrincipalChange={onPrincipalChange}
        onSectionChange={onSectionChange}
        section={section}
        principalContent={principalContent}
      />
      <Buttons
        onSubmitSection={onSubmitSection}
        onSubmitPrincipal={onSubmitPrincipal}
        sectionPage={sectionPage}
      />
    </form>
  );
};
