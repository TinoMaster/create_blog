import { ISectionBlog } from "../../../types/blog.type";
import { FormatCodeFromString } from "../../Global/FormatCodeFromString";
import { FormatTextWithLinks } from "../../Global/FormatTextWithLinks";

export const SectionItemBlog = ({ section }: { section: ISectionBlog }) => {
  return (
    <div className="flex flex-col lg:text-lg gap-5 p-2">
      <h2 className="font-semibold text-lg lg:text-xl">{section.title}</h2>
      {section.type === "image" ? (
        <div className="w-full p-2 bg-white/5">
          <img
            src={section.content}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      ) : null}
      {section.type === "text" ? (
        <FormatTextWithLinks text={section.content} />
      ) : null}
      {section.type === "code" ? (
        <FormatCodeFromString codeString={section.content} />
      ) : null}
    </div>
  );
};
