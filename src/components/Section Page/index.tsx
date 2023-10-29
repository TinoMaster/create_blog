import { sectionsPage } from "../../data/categories";
import { useDispatch } from "react-redux";
import { setSection } from "../../redux/reducers/section/sectionSlice";

export const SectionPage = () => {
  const dispatch = useDispatch();
  const changeSectionPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSection(e.target.value));
  };

  return (
    <div className="flex flex-col justify-start items-start py-5 gap-1 rounded-md">
      <label htmlFor="input_category">Seccion</label>
      <select
        onChange={changeSectionPage}
        name="category"
        id="input_category"
        className="p-3 inline rounded bg-primaryDark focus:outline-none checked:outline-none"
      >
        {sectionsPage.map((cat) => (
          <option className="bg-zinc-800" key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};
