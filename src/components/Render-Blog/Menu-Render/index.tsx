import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { MouseEventHandler } from "react";
import { RENDER_ALL_BLOG, RENDER_PRINCIPAL } from "../../../data/const";

interface MenuRenderProps {
  changeRender: MouseEventHandler<HTMLSpanElement>;
  render: string;
}

export const MenuRender = ({ changeRender, render }: MenuRenderProps) => {
  const blog = useSelector((state: RootState) => state.blog);
  const { title, sections } = blog;

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {title && (
        <>
          <span
            onClick={changeRender}
            className={`p-2 shadow-md rounded-md hover:cursor-pointer hover:bg-white/5 transition-colors ${
              render === RENDER_ALL_BLOG ? "bg-secondary/50 text-white" : ""
            }`}
          >
            Blog
          </span>
          <span
            onClick={changeRender}
            className={`p-2 shadow-md rounded-md hover:cursor-pointer hover:bg-white/5 transition-colors ${
              render === RENDER_PRINCIPAL ? "bg-primary/50 text-white" : ""
            }`}
          >
            Principal
          </span>
        </>
      )}
      {sections.map((sect) => (
        <span
          key={sect.id}
          onClick={changeRender}
          className={`p-2 shadow-md rounded-md hover:cursor-pointer hover:bg-white/5 transition-colors ${
            render === `section${sect.id}` ? "bg-third/50 text-white" : ""
          }`}
        >
          {`section${sect.id}`}
        </span>
      ))}
    </div>
  );
};
