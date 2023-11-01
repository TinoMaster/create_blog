import { FaBlogger } from "react-icons/fa";
import { FormCreateBlog } from "../components/CreateBlog_Page/Form-Create-Blog";
import { PrincipalSelectionPanel } from "../components/CreateBlog_Page/Principal-Selection-Panel";
import { View } from "../components/Container";

interface CreateBlogPageProps {
  renderView: View;
}

export const CreateBlogPage = ({ renderView }: CreateBlogPageProps) => {
  return (
    <div
      className={`w-full h-full lg:w-1/2 py-5 px-2 lg:p-5 overflow-auto absolute lg:relative bg-darkMode lg:bg-transparent pb-24 ${
        renderView === "create" ? "z-20" : "z-10"
      }`}
    >
      <div className="flex justify-center items-center gap-2">
        <FaBlogger className="text-2xl shadow-md" />
        <h2 className="text-center">Crear Blog</h2>
      </div>
      <PrincipalSelectionPanel />
      <FormCreateBlog />
    </div>
  );
};
