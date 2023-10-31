import { Header } from "./Header";
import { MenuRender } from "./Menu-Render";
import { Sections } from "./Sections";
import { EditButton } from "./Menu-Render/EditButton";
import { useRender } from "../../hooks/useRender";
import { RENDER_ALL_BLOG, RENDER_PRINCIPAL } from "../../data/const";

export const RenderBlog = () => {
  const { render, changeRender, deleteSection } = useRender();
  return (
    <div className="p-2 text-slate-200 font-light font-inter relative">
      <MenuRender changeRender={changeRender} />
      <div className="flex flex-col gap-3">
        {render !== RENDER_ALL_BLOG ? (
          <EditButton deleteSection={deleteSection} />
        ) : null}
        {render === RENDER_ALL_BLOG || render === RENDER_PRINCIPAL ? (
          <Header />
        ) : null}
        {render !== RENDER_PRINCIPAL ? <Sections render={render} /> : null}
      </div>
    </div>
  );
};
