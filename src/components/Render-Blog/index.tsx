import { Header } from "./Header";
import { SectionItemBlog } from "./SectionItemBlog";
import { useSelector } from "react-redux";
import { IBlog } from "../../types/blog.type";
import { RootState } from "../../redux/store";

export const RenderBlog = () => {
  const { title, category, content, image, description, sections }: IBlog =
    useSelector((state: RootState) => state.blog);
  return (
    <div className="p-2 text-slate-200 font-light font-inter">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          <Header
            category={category}
            content={content}
            description={description}
            image={image}
            title={title}
          />
          <div className="flex flex-col gap-3">
            {sections.map((section, index) => (
              <SectionItemBlog key={index} section={section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
