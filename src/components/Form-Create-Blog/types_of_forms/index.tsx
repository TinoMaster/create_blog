/* import { useForm } from "../../../hooks/useForm"; */
import { useForm } from "../../../hooks/useForm";
import { useImage } from "../../../hooks/useImage";
import { ISectionPageProps } from "../../../types/categories.type";
import { Buttons } from "./Buttons";
import { Content } from "./Content";
import { Image } from "./Image";
import { Title } from "./Title";
import { CategoryBlog } from "./CategoryBlog";
import { DescriptionBlog } from "./DescriptionBlog";
import LoadingPage from "../../Loaders/LoadingPage";
import { ErrorForm } from "../../Error/ErrorForm";

export const Form = ({ sectionPage }: ISectionPageProps) => {
  const { onDropImage, preview, handleImageChange, image } =
    useImage(sectionPage);
  const {
    onSectionChange,
    onPrincipalChange,
    section,
    principalContent,
    onSubmitPrincipal,
    onSubmitSection,
    error,
    loading,
    formRef,
  } = useForm(sectionPage, image);

  return (
    <form action="" ref={formRef} className="flex flex-col gap-4 relative">
      {error && <ErrorForm error={error} />}
      {loading && <LoadingPage />}
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
