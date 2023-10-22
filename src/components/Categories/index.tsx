import { useContext } from "react";
import { categories } from "../../data/categories";
import BlogContext from "../../context/blogContext";

export const Category = () => {
  const { handleCategory } = useContext(BlogContext) ?? {};
  return (
    <div className="flex flex-col justify-start items-start py-5 gap-1">
      <label htmlFor="input_category">Categoria</label>
      <select
        onChange={handleCategory}
        name="category"
        id="input_category"
        className="p-1 inline rounded bg-white/10 focus:outline-none checked:outline-none"
      >
        {categories.map((cat) => (
          <option className="bg-zinc-800" key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
