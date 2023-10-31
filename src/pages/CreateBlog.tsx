import { FaBlogger } from "react-icons/fa";
import { FormCreateBlog } from "../components/CreateBlog_Page/Form-Create-Blog";
import { PrincipalSelectionPanel } from "../components/CreateBlog_Page/Principal-Selection-Panel";

export const CreateBlogPage = () => {
  return (
    <div className="w-full h-full lg:w-1/2 p-5 overflow-auto">
      <div className="flex justify-center items-center gap-2">
        <FaBlogger className="text-2xl shadow-md"/>
        <h2 className="text-center">Crear Blog</h2>
      </div>
      <PrincipalSelectionPanel />
      <FormCreateBlog />
    </div>
  );
};
