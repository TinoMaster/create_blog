import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearSection } from "../redux/reducers/blog/blogSlice";

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
    if (sectionToEdit !== "principal") {
      dispatch(clearSection(sectionToEdit));
    }
  };

  return { render, changeRender, deleteSection };
};
