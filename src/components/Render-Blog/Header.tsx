import { iconsHeadBlog } from "../../data/iconsHeadBlog";
import { IBlog } from "../../types/blog.type";
import { whatColorIs } from "../../utils/colorIconBlog";
import { FormatTextWithLinks } from "./FormatTextWithLinks";

interface HeaderItemBlogProps {
  title: IBlog["title"];
  description: IBlog["description"];
  image: IBlog["image"];
  category: IBlog["category"];
  content: IBlog["content"];
}

export const Header = ({
  description,
  image,
  title,
  category,
  content,
}: HeaderItemBlogProps) => {
  const Icon = iconsHeadBlog[category];
  const background = whatColorIs(category);
  return (
    <div className="flex flex-col gap-2 pt-[40px] lg:text-lg">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="font-semibold">{description}</p>
      <span className="text-xs">15/1/2012</span>
      <div className="flex items-center gap-2 text-2xl">
        <Icon className={`p-1 rounded-full text-darkMode ${background}`} />
        <span className="text-xl">{category}</span>
      </div>
      <div className="w-full">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <div>
        <FormatTextWithLinks text={content} />
      </div>
    </div>
  );
};
