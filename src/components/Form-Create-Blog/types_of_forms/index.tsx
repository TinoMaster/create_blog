/* import { useForm } from "../../../hooks/useForm"; */
import { useForm } from "../../../hooks/useForm";
import { useImage } from "../../../hooks/useImage";
import { ICategoryProps } from "../../../types/categories.type";
import { Buttons } from "./Buttons";
import { Content } from "./Content";
import { Image } from "./Image";
import { Title } from "./Title";

export const Form = ({ category }: ICategoryProps) => {
  const { onDropImage, preview, handleImageChange } = useImage();
  const { onSectionChange, onPrincipalChange, section, principalContent } =
    useForm(category);

  return (
    <form action="" className="flex flex-col gap-4">
      <Title
        category={category}
        onPrincipalChange={onPrincipalChange}
        onSectionChange={onSectionChange}
        section={section}
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
      <Buttons />
    </form>
  );
};
