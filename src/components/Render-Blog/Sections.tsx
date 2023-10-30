import { useSelector } from "react-redux";
import { IBlog } from "../../types/blog.type";
import { SectionItemBlog } from "./SectionItemBlog";
import { RootState } from "../../redux/store";

export const Sections = ({ render }: { render: string }) => {
  const { sections }: IBlog = useSelector((state: RootState) => state.blog);

  return (
    <div className="flex flex-col gap-3">
      {render === "blog"
        ? sections.map((section) => (
            <SectionItemBlog key={section.id} section={section} />
          ))
        : sections
            .filter((el) => el.id === Number(render[render.length - 1]))
            .map((section) => (
              <SectionItemBlog key={section.id} section={section} />
            ))}
    </div>
  );
};
