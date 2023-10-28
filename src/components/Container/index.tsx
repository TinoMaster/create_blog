import { Category } from "../Categories";
import { FormCreateBlog } from "../Form-Create-Blog";
import { RenderBlog } from "../Render-Blog";

export const Container = () => {
  return (
    <section className="flex flex-wrap w-full">
      <div className="lg:w-1/2 p-5 space-y-10">
        <h2 className="text-center">Create Blog</h2>
        <Category />
        <FormCreateBlog />
      </div>
      <div className="lg:w-1/2 p-5 shadow-inner shadow-black">
        <h2 className="text-center">Render Blog</h2>
        <RenderBlog />
      </div>
    </section>
  );
};
