import { useSelector } from "react-redux";
import { iconsHeadBlog } from "../../data/iconsHeadBlog";
import { RootState } from "../../redux/store";
import { IBlog } from "../../types/blog.type";
import { whatColorIs } from "../../utils/colorIconBlog";
import { FormatTextWithLinks } from "./FormatTextWithLinks";

export const Header = () => {
  const { title, category, content, image, description }: IBlog = useSelector(
    (state: RootState) => state.blog
  );
  const Icon = iconsHeadBlog[category];
  const background = whatColorIs(category);
  return (
    <div className="flex flex-col gap-2 pt-[40px] ">
      <h2 className="font-bold">{title}</h2>
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
