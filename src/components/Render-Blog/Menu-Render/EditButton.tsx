import { BiSolidMessageSquareEdit, BiSolidTrash } from "react-icons/bi";

interface EditButtonProps {
  deleteSection: () => void;
}

export const EditButton = ({ deleteSection }: EditButtonProps) => {
  return (
    <div className="absolute right-0 p-2 flex gap-2">
      <button className="p-3 rounded-full bg-white/5 hover:bg-yellow-400/30 transition-colors">
        <BiSolidMessageSquareEdit />
      </button>
      <button onClick={deleteSection} className="p-3 rounded-full bg-white/5 hover:bg-red-400/30 transition-colors">
        <BiSolidTrash />
      </button>
    </div>
  );
};
