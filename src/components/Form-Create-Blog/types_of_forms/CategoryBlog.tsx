import { blogs } from "../../../data/blogs";
import { TCategory } from "../../../types/categories.type";

interface CategoryBlogProps {
  category: TCategory;
}

export const CategoryBlog = ({ category }: CategoryBlogProps) => {
  return (
    <div
      className={`flex flex-col ${
        category === "principal" ? "flex" : "hidden"
      }`}
    >
      <label htmlFor="category_imput">Category</label>
      <select className="block w-full bg-zinc-800 text-gray-200 py-2 px-2 rounded leading-tight focus:outline-none focus:border-blue-500 focus:bg-zinc-800">
        <option value="" className="">
          --Eliga una categoria--
        </option>
        {blogs.categoryBlog.map((cat) => (
          <option key={cat} value={cat} className="">
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
