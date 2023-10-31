import { Form } from "./types_of_forms/index";
import { useSelector } from "react-redux";
import { TSectionPage } from "../../../types/categories.type";
import { RootState } from "../../../redux/store";

export const FormCreateBlog = () => {
  const sectionPage: TSectionPage = useSelector(
    (state: RootState) => state.section
  );

  return <div className="">{sectionPage && <Form />}</div>;
};
