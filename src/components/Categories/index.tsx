import { useContext } from "react";
import { categories } from "../../data/categories";
import BlogContext from "../../context/blogContext";

export const Category = () => {
  const { handleCategory } = useContext(BlogContext) ?? {};
  return (
    <div className="flex flex-col justify-start items-start py-5 gap-1 rounded-md">
      <label htmlFor="input_category">Seccion</label>
      <select
        onChange={handleCategory}
        name="category"
        id="input_category"
        className="p-3 inline rounded bg-primaryDark focus:outline-none checked:outline-none"
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
