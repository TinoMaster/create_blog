import { IPrincipalSection, ISectionBlog } from "../../../types/blog.type";
import { TSectionPage } from "../../../types/categories.type";

interface TitleSectionProps {
  sectionPage: TSectionPage;
  onSectionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPrincipalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  section: ISectionBlog;
  principalContent: IPrincipalSection;
}

export const Title = ({
  sectionPage,
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
          sectionPage === "principal"
            ? onPrincipalChange(e)
            : onSectionChange(e)
        }
        id="input_title"
        name="title"
        type="text"
        value={
          sectionPage === "principal" ? principalContent.title : section.title
        }
        className="p-2 rounded bg-white/10 placeholder:text-slate-100/20 font-thin focus:outline-none shadow"
        placeholder="Titulo del contenido..."
      />
    </div>
  );
};
