import { ICategoryProps } from "../../../types/categories.type";
import { Content } from "./Content";
import { Image } from "./Image";
import { Title } from "./Title";

export const TypeOfForm = ({ type }: ICategoryProps) => {
  return (
    <form action="" className="flex flex-col gap-2">
      <Title />
      {type === "image" || type === "video" ? <Image /> : <Content />}
      <input
        type="submit"
        value="Crear Seccion"
        className="p-2 bg-violet-600 rounded"
      />
    </form>
  );
};
