import { Form } from "./types_of_forms/index";
import { useSelector } from "react-redux";
import { TSectionPage } from "../../types/categories.type";
import { RootState } from "../../redux/store";

export const FormCreateBlog = () => {
  const section: TSectionPage = useSelector(
    (state: RootState) => state.section
  );

  return <div className="">{section && <Form sectionPage={section} />}</div>;
};
