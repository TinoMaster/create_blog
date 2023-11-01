import { ISectionBlog } from "../../../types/blog.type";
import { FormatCodeFromString } from "../../Global/FormatCodeFromString";
import { FormatTextWithLinks } from "../../Global/FormatTextWithLinks";

export const SectionItemBlog = ({ section }: { section: ISectionBlog }) => {
  return (
    <div className="flex flex-wrap lg:text-lg gap-5 p-2">
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
        <div className="w-full">
          <FormatCodeFromString codeString={section.content} />
        </div>
      ) : null}
    </div>
  );
};
