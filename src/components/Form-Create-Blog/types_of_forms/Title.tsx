import { IPrincipalSection, ISectionBlog } from "../../../types/blog.type";
import { TCategory } from "../../../types/categories.type";

interface TitleSectionProps {
  category: TCategory;
  onSectionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrincipalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  section: ISectionBlog;
  principalContent: IPrincipalSection;
}

export const Title = ({
  category,
  onSectionChange,
  onPrincipalChange,
  section,
  principalContent,
}: TitleSectionProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="input_title">Titulo</label>
      <input
        onChange={(e) =>
          category === "principal" ? onPrincipalChange(e) : onSectionChange(e)
        }
        id="input_title"
        name="title"
        type="text"
        value={
          category === "principal" ? principalContent.title : section.title
        }
        className="p-2 rounded bg-white/10 placeholder:text-slate-100/20 font-thin focus:outline-none shadow"
        placeholder="Titulo del contenido..."
      />
    </div>
  );
};
