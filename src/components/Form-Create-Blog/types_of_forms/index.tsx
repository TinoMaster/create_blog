/* import { useForm } from "../../../hooks/useForm"; */
import { useForm } from "../../../hooks/useForm";
import { useImage } from "../../../hooks/useImage";
import { ICategoryProps } from "../../../types/categories.type";
import { Buttons } from "./Buttons";
import { Content } from "./Content";
import { Image } from "./Image";
import { Title } from "./Title";
import { CategoryBlog } from "./CategoryBlog";
import { DescriptionBlog } from "./DescriptionBlog";

export const Form = ({ category }: ICategoryProps) => {
  const { onDropImage, preview, handleImageChange, image } = useImage(category);
  const {
    onSectionChange,
    onPrincipalChange,
    section,
    principalContent,
    onSubmitPrincipal,
    onSubmitSection,
    error,
    loading,
  } = useForm(category, image);

  return (
    <form action="" className="flex flex-col gap-4 relative">
      {error && (
        <div className="absolute bg-red-400 text-white text-center rounded-md p-2">
          {error}
        </div>
      )}
      {loading && (
        <div className="absolute bg-green-400 text-white text-center rounded-md p-2">
          Loading...
        </div>
      )}
      <CategoryBlog onPrincipalChange={onPrincipalChange} category={category} />
      <Title
        category={category}
        onPrincipalChange={onPrincipalChange}
        onSectionChange={onSectionChange}
        section={section}
        principalContent={principalContent}
      />
      <DescriptionBlog
        category={category}
        onPrincipalChange={onPrincipalChange}
        principalContent={principalContent}
      />
      <Image
        preview={preview}
        handleImageChange={handleImageChange}
        onDropImage={onDropImage}
        category={category}
      />
      <Content
        category={category}
        onPrincipalChange={onPrincipalChange}
        onSectionChange={onSectionChange}
        section={section}
        principalContent={principalContent}
      />
      <Buttons
        onSubmitSection={onSubmitSection}
        onSubmitPrincipal={onSubmitPrincipal}
        category={category}
      />
    </form>
  );
};
