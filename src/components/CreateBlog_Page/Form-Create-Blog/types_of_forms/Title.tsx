import { IPrincipalSection, ISectionBlog } from "../../../../types/blog.type";
import { TSectionPage } from "../../../../types/categories.type";

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
      <label htmlFor="input_title" className="label">
        Titulo
      </label>
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
        className="input"
        placeholder="Titulo del contenido..."
      />
    </div>
  );
};
