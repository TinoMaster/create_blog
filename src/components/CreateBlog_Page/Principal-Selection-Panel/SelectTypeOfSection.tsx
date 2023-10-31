import React from "react";
import { setSection } from "../../../redux/reducers/section/sectionSlice";
import { useDispatch } from "react-redux";
import { sectionsPage } from "../../../data/categories";

export const SelectTypeOfSection = () => {
  const dispatch = useDispatch();
  const changeSectionPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSection(e.target.value));
  };
  return (
    <div className="flex flex-col py-2 gap-1 rounded-md">
      <label htmlFor="input_category" className="label">
        Seccion
      </label>
      <select
        onChange={changeSectionPage}
        name="category"
        id="input_category"
        className="input"
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
