import { RenderBlog } from "../components/Render-Blog";

export const RenderBlogPage = () => {
  return (
    <div className="w-full h-full overflow-auto lg:w-1/2 p-5 shadow-inner shadow-black ">
      <h2 className="text-center">Render Blog</h2>
      <RenderBlog />
    </div>
  );
};
