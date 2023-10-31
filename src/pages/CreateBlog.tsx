import { FormCreateBlog } from "../components/CreateBlog_Page/Form-Create-Blog";
import { PrincipalSelectionPanel } from "../components/CreateBlog_Page/Principal-Selection-Panel";

export const CreateBlogPage = () => {
  return (
    <div className="w-full h-full lg:w-1/2 p-5 overflow-auto">
      <h2 className="text-center">Create Blog</h2>
      <PrincipalSelectionPanel />
      <FormCreateBlog />
    </div>
  );
};
