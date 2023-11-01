import { useState } from "react";
import { CreateBlogPage } from "../../pages/CreateBlog";
import { RenderBlogPage } from "../../pages/RenderBlog";
import { MenuRender } from "./MenuRender";

export type View = "create" | "view";

export const Container = () => {
  const [renderView, setRenderView] = useState<View>("create");

  const changeView = () => {
    if (renderView === "create") {
      setRenderView("view");
    } else {
      setRenderView("create");
    }
  };

  return (
    <section className="flex flex-wrap w-full h-full font-serif">
      <MenuRender renderView={renderView} changeView={changeView} />
      <div className="relative w-full h-full p-2 overflow-hidden flex justify-center items-center">
        <CreateBlogPage renderView={renderView} />
        <RenderBlogPage renderView={renderView} />
      </div>
    </section>
  );
};
