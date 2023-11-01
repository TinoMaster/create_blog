import { useSelector } from "react-redux";
import { iconsHeadBlog } from "../../../data/iconsHeadBlog";
import { RootState } from "../../../redux/store";
import { IBlog } from "../../../types/blog.type";
import { whatColorIs } from "../../../utils/colorIconBlog";
import { FormatTextWithLinks } from "../../Global/FormatTextWithLinks";

export const Header = () => {
  const { title, category, content, image, description }: IBlog = useSelector(
    (state: RootState) => state.blog
  );
  let Icon;
  let background = "";
  if (category) {
    Icon = iconsHeadBlog[category];
    background = whatColorIs(category);
  }
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold">{title}</h2>
      <p className="font-semibold">{description}</p>
      {title ? <span className="text-xs">15/1/2012</span> : null}

      <div className="flex items-center gap-2 text-2xl">
        {Icon ? (
          <Icon className={`p-1 rounded-full text-slate-800 ${background}`} />
        ) : null}
        <span className="text-xl">{category}</span>
      </div>
      <div className="w-full">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <div className="text-lg">
        <FormatTextWithLinks text={content} />
      </div>
    </div>
  );
};
