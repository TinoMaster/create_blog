import { blogs } from "../../../../data/blogs";
import { TSectionPage } from "../../../../types/categories.type";

interface CategoryBlogProps {
  sectionPage: TSectionPage;
  onPrincipalChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CategoryBlog = ({
  sectionPage,
  onPrincipalChange,
}: CategoryBlogProps) => {
  return (
    <div
      className={`flex flex-col ${
        sectionPage === "principal" ? "flex" : "hidden"
      }`}
    >
      <label htmlFor="category_imput" className="label">
        Category
      </label>
      <select onChange={onPrincipalChange} name="type" className="input">
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
