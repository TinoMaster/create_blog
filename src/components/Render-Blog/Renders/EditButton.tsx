import { BiSolidMessageSquareEdit, BiSolidTrash } from "react-icons/bi";
import { RENDER_ALL_BLOG } from "../../../data/const";

interface EditButtonProps {
  deleteSection: () => void;
  deleteBlog: () => void;
  render: string;
}

export const EditButton = ({
  deleteSection,
  deleteBlog,
  render,
}: EditButtonProps) => {
  return (
    <div className="absolute right-0 -top-10 p-2 flex gap-2">
      {render !== RENDER_ALL_BLOG ? (
        <button className="p-3 rounded-full bg-white/5 hover:bg-yellow-400/30 transition-colors">
          <BiSolidMessageSquareEdit />
        </button>
      ) : null}

      <button
        onClick={render === RENDER_ALL_BLOG ? deleteBlog : deleteSection}
        className="p-3 rounded-full bg-white/5 hover:bg-red-400/30 transition-colors"
      >
        <BiSolidTrash />
      </button>
    </div>
  );
};
