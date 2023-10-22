import { useContext } from "react";
import { TypeOfForm } from "./types_of_forms/index";
import BlogContext from "../../context/blogContext";

export const FormCreateBlog = () => {
  const context = useContext(BlogContext);
  const category = context?.category;

  return <div className="">{category && <TypeOfForm type={category} />}</div>;
};
