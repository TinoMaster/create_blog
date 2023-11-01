import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearBlog, clearSection } from "../redux/reducers/blog/blogSlice";
import { goBackToOtherRender } from "../utils/goBackToOtherRender";

export const useRender = () => {
  const [render, setRender] = useState<string>("blog");
  /* Redux */
  const dispatch = useDispatch();

  const changeRender = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    setRender(target.textContent?.toLowerCase() ?? "");
  };

  const deleteSection = () => {
    const sectionToEdit =
      render === "principal" ? "principal" : Number(render[render.length - 1]);
    const confirm = window.confirm(
      `Seguro que desea eliminar la seccion: ${sectionToEdit}`
    );
    if (sectionToEdit !== "principal" && confirm) {
      dispatch(clearSection(sectionToEdit));
      setRender(goBackToOtherRender(render));
    }
  };

  const deleteBlog = () => {
    const confirm = window.confirm("Seguro que desea borrar todo el blog?");
    if (confirm) {
      dispatch(clearBlog());
    }
  };

  return { render, changeRender, deleteSection, deleteBlog };
};
