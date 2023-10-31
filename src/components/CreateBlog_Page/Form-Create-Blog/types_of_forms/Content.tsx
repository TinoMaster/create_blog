import { IPrincipalSection, ISectionBlog } from "../../../../types/blog.type";
import { TSectionPage } from "../../../../types/categories.type";

interface ContentBlogProps {
  sectionPage: TSectionPage;
  onSectionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPrincipalChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  section: ISectionBlog;
  principalContent: IPrincipalSection;
}

export const Content = ({
  sectionPage,
  onSectionChange,
  onPrincipalChange,
  section,
  principalContent,
}: ContentBlogProps) => {
  return (
    <div
      className={`flex flex-col ${
        sectionPage === "video" || sectionPage === "image" ? "hidden" : "block"
      }`}
    >
      <label htmlFor="text-area" className="label">
        Contenido
      </label>
      <textarea
        onChange={(e) =>
          sectionPage === "principal"
            ? onPrincipalChange(e)
            : onSectionChange(e)
        }
        value={
          sectionPage === "principal"
            ? principalContent.content
            : section.content
        }
        name="content"
        id="text-area"
        rows={10}
        placeholder="Agregue el contenido..."
        className="input resize-none overflow-auto"
      ></textarea>
    </div>
  );
};
