import { CreateBlogPage } from "../../pages/CreateBlog";
import { RenderBlogPage } from "../../pages/RenderBlog";

export const Container = () => {
  return (
    <section className="flex flex-wrap w-full h-full font-serif">
      <CreateBlogPage />
      <RenderBlogPage />
    </section>
  );
};
