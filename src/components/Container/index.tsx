import { SectionPage } from "../Section Page";
import { FormCreateBlog } from "../Form-Create-Blog";
import { RenderBlog } from "../Render-Blog";

export const Container = () => {
  return (
    <section className="flex flex-wrap w-full h-full">
      <div className="w-full h-full lg:w-1/2 p-5 overflow-auto">
        <h2 className="text-center">Create Blog</h2>
        <SectionPage />
        <FormCreateBlog />
      </div>
      <div className="w-full h-full overflow-auto lg:w-1/2 p-5 shadow-inner shadow-black ">
        <h2 className="text-center">Render Blog</h2>
        <RenderBlog />
      </div>
    </section>
  );
};
