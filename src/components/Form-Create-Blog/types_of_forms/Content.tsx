import { IPrincipalSection, ISectionBlog } from "../../../types/blog.type";
import { TCategory } from "../../../types/categories.type";

interface ContentBlogProps {
  category: TCategory;
  onSectionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPrincipalChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  section: ISectionBlog;
  principalContent: IPrincipalSection;
}

export const Content = ({
  category,
  onSectionChange,
  onPrincipalChange,
  section,
  principalContent,
}: ContentBlogProps) => {
  return (
    <div
      className={`flex flex-col ${
        category === "video" || category === "image" ? "hidden" : "block"
      }`}
    >
      <label htmlFor="text-area">Contenido</label>
      <textarea
        onChange={(e) =>
          category === "principal" ? onPrincipalChange(e) : onSectionChange(e)
        }
        value={
          category === "principal" ? principalContent.content : section.content
        }
        name="content"
        id="text-area"
        rows={10}
        placeholder="Agregue el contenido..."
        className="resize-none bg-white/10 overflow-auto placeholder:text-slate-100/20 rounded p-2 focus:outline-none"
      ></textarea>
    </div>
  );
};
