import { ISectionBlog } from "../../../types/blog.type";
import { FormatCodeFromString } from "../../Global/FormatCodeFromString";
import { FormatInfoMarkdown } from "../../Global/FormatInfoMarkdown";
import { FormatTextWithLinks } from "../../Global/FormatTextWithLinks";

export const SectionItemBlog = ({ section }: { section: ISectionBlog }) => {
  return (
    <div className="flex flex-wrap lg:text-lg">
      <h2 className="w-full font-semibold text-lg lg:text-xl">
        {section.title}
      </h2>
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
        <div style={{ whiteSpace: "pre-wrap" }} className="w-full">
          <FormatCodeFromString codeString={section.content} />
        </div>
      ) : null}
      {section.type === "markdown" ? (
        <div style={{ whiteSpace: "pre-wrap" }} className="w-full">
          <FormatInfoMarkdown info={section.content} />
        </div>
      ) : null}
    </div>
  );
};
