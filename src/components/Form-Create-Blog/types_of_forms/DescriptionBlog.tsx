import { IPrincipalSection } from "../../../types/blog.type";
import { TCategory } from "../../../types/categories.type";

interface DescriptionBlogProps {
  category: TCategory;
  onPrincipalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  principalContent: IPrincipalSection;
}

export const DescriptionBlog = ({
  category,
  onPrincipalChange,
  principalContent,
}: DescriptionBlogProps) => {
  return (
    <div
      className={`flex flex-col ${
        category === "principal" ? "flex" : "hidden"
      }`}
    >
      <label htmlFor="">Descripcion</label>
      <input
        onChange={onPrincipalChange}
        type="text"
        value={principalContent.description}
        name="description"
        placeholder="Agregue una descripcion"
        className="p-2 rounded bg-white/10 placeholder:text-slate-100/20 font-thin focus:outline-none shadow"
      />
    </div>
  );
};