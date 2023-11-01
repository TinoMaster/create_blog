import { MenuRender } from "./Menu-Render";
import { useRender } from "../../hooks/useRender";
import { Renders } from "./Renders";

export const RenderBlog = () => {
  const { render, changeRender, deleteSection, deleteBlog } = useRender();
  return (
    <div className="p-2 text-slate-200 font-light font-inter relative space-y-20">
      <MenuRender changeRender={changeRender} render={render} />
      <Renders
        render={render}
        deleteBlog={deleteBlog}
        deleteSection={deleteSection}
      />
    </div>
  );
};
