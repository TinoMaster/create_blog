import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { TSectionPage } from "../../../../types/categories.type";
import { IBlog } from "../../../../types/blog.type";

interface SetIDSectionProps {
  onChangeSectionID: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SetIDSection = ({ onChangeSectionID }: SetIDSectionProps) => {
  const section: TSectionPage = useSelector(
    (state: RootState) => state.section
  );
  const { sections }: IBlog = useSelector((state: RootState) => state.blog);
  const sectionAmount: Array<number> = [];
  for (const pos in sections) {
    sectionAmount.push(Number(pos) + 1);
  }
  sectionAmount.push(sections.length + 1);

  return (
    <div
      className={`${
        section === "principal" ? "hidden" : "block"
      } absolute right-0 -top-10 flex justify-end items-center gap-1 rounded-md`}
    >
      <label htmlFor="input_category" className="label">
        Seccion ID:
      </label>
      <select
        onChange={onChangeSectionID}
        name="id"
        id="input_category"
        className="input"
      >
        {sectionAmount.reverse().map((value) => (
          <option className="bg-zinc-800" key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
