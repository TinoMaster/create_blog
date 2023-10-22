import { Category } from "../Categories";
import { FormCreateBlog } from "../Form-Create-Blog";

export const Container = () => {
  return (
    <div className="w-full max-w-[700px] m-auto">
      <h1 className="text-center">Create Blog</h1>
      <Category />
      <FormCreateBlog />
    </div>
  );
};
