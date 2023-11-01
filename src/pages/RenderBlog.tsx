import { View } from "../components/Container";
import { RenderBlog } from "../components/Render-Blog";

interface CreateBlogPageProps {
  renderView: View;
}

export const RenderBlogPage = ({ renderView }: CreateBlogPageProps) => {
  return (
    <div
      className={`w-full h-full lg:w-1/2 py-5 px-2 lg:p-5 overflow-auto absolute lg:relative bg-darkMode lg:bg-transparent pb-24 ${
        renderView === "view" ? "z-20" : "z-10"
      }`}
    >
      <h2 className="text-center">Render Blog</h2>
      <RenderBlog />
    </div>
  );
};
