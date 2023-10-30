import { Header } from "./Header";
import { MenuRender } from "./Menu-Render";
import { Sections } from "./Sections";
import { EditButton } from "./Menu-Render/EditButton";
import { useRender } from "../../hooks/useRender";

export const RenderBlog = () => {
  const { render, changeRender, deleteSection } = useRender();
  return (
    <div className="p-2 text-slate-200 font-light font-inter relative">
      <MenuRender changeRender={changeRender} />
      <div className="flex flex-col gap-3">
        {render !== "blog" ? (
          <EditButton deleteSection={deleteSection} />
        ) : null}
        {render === "blog" || render === "principal" ? <Header /> : null}
        {render !== "principal" ? <Sections render={render} /> : null}
      </div>
    </div>
  );
};
