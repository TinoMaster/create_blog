import { useImage } from "../../../hooks/useImage";
import { ICategoryProps } from "../../../types/categories.type";
import { Content } from "./Content";
import { Image } from "./Image";
import { Title } from "./Title";

export const Form = ({ type }: ICategoryProps) => {
  const { onDropImage, preview, handleImageChange } = useImage();
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

      <input
        type="button"
        value="Crear Seccion"
        className="p-2 bg-gray-600 rounded"
      />
      <input
        type="submit"
        value="Crear Blog"
        className="p-2 bg-violet-600 rounded"
      />
    </form>
  );
};
