/* import { useForm } from "../../../hooks/useForm"; */
import { useImage } from "../../../hooks/useImage";
import { ICategoryProps } from "../../../types/categories.type";
import { Buttons } from "./Buttons";
import { Content } from "./Content";
import { Image } from "./Image";
import { Title } from "./Title";

export const Form = ({ type }: ICategoryProps) => {
  const { onDropImage, preview, handleImageChange } = useImage();
  /* const { onSectionChange } = useForm(); */

  return (
    <form action="" className="flex flex-col gap-4">
      <Title />
      {type === "principal" || type === "image" || type === "video" ? (
        <Image
          preview={preview}
          handleImageChange={handleImageChange}
          onDropImage={onDropImage}
        />
      ) : null}
      {type === "code" || type === "principal" || type === "text" ? (
        <Content />
      ) : null}
      <Buttons />
    </form>
  );
};
