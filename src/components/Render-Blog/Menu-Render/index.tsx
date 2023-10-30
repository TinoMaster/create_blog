import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { MouseEventHandler } from "react";

interface MenuRenderProps {
  changeRender: MouseEventHandler<HTMLSpanElement>;
}

export const MenuRender = ({ changeRender }: MenuRenderProps) => {
  const blog = useSelector((state: RootState) => state.blog);
  return (
    <div className="flex justify-center gap-5">
      {blog.title && (
        <>
          <span
            onClick={changeRender}
            className="p-2 bg-white/5 rounded-md hover:cursor-pointer"
          >
            Blog
          </span>
          <span
            onClick={changeRender}
            className="p-2 bg-white/5 rounded-md hover:cursor-pointer"
          >
            Principal
          </span>
        </>
      )}
      {blog.sections.map((sect) => (
        <span
          key={sect.id}
          onClick={changeRender}
          className="p-2 bg-white/5 rounded-md hover:cursor-pointer"
        >
          {`section${sect.id}`}
        </span>
      ))}
    </div>
  );
};
