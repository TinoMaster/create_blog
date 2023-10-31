import { useSelector } from "react-redux";
import { sectionsPage } from "../../../../data/categories";
import { RootState } from "../../../../redux/store";
import { TSectionPage } from "../../../../types/categories.type";

export const SetIDSection = () => {
  const section: TSectionPage = useSelector(
    (state: RootState) => state.section
  );

  return (
    <div
      className={`${
        section === "principal" ? "hidden" : "block"
      } absolute right-0 -top-10 flex justify-end items-center gap-1 rounded-md`}
    >
      <label htmlFor="input_category" className="label">
        Seccion ID:
      </label>
      <select name="category" id="input_category" className="input">
        {sectionsPage.map((cat) => (
          <option className="bg-zinc-800" key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
