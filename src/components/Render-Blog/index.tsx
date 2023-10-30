import { useState } from "react";
import { Header } from "./Header";
import { MenuRender } from "./Menu-Render";
import { Sections } from "./Sections";
import { EditButton } from "./Menu-Render/EditButton";

export const RenderBlog = () => {
  const [render, setRender] = useState<string>("blog");
  const changeRender = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    setRender(target.textContent?.toLowerCase() ?? "");
  };
  return (
    <div className="p-2 text-slate-200 font-light font-inter relative">
      <MenuRender changeRender={changeRender} />
      <div className="flex flex-col gap-3">
        {render !== "blog" ? <EditButton /> : null}
        {render === "blog" || render === "principal" ? <Header /> : null}
        {render !== "principal" ? <Sections render={render} /> : null}
      </div>
    </div>
  );
};
