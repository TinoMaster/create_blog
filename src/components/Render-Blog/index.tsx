import { useContext } from "react";
import { Header } from "./Header";
import BlogContext, { BlogContextType } from "../../context/blogContext";
import { SectionItemBlog } from "./SectionItemBlog";

export const RenderBlog = () => {
  const blogContext = useContext(BlogContext);
  const { form } = blogContext as BlogContextType;
  const { category, content, description, sections, image, title } = form;
  return (
    <div className="p-2 text-slate-200 font-light font-inter">
      <div className="flex flex-col gap-3 mt-20">
        <div className="flex flex-col gap-3">
          <Header
            category={category}
            content={content}
            description={description}
            image={image}
            title={title}
          />
          <div className="flex flex-col gap-3">
            {sections.map((section) => (
              <SectionItemBlog key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
