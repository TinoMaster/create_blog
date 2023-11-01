import { View } from ".";

interface MenuRenderProps {
  renderView: View;
  changeView: () => void;
}

export const MenuRender = ({ renderView, changeView }: MenuRenderProps) => {
  return (
    <div className="w-full lg:hidden flex justify-between items-center shadow px-2">
      <div className="text-xl">Blog</div>
      <div className="flex gap-5 p-4">
        <button
          onClick={changeView}
          className={`text-white font-bold transition-colors ${
            renderView === "create" ? "text-primary border-b" : ""
          }`}
        >
          Create Blog
        </button>
        <button
          onClick={changeView}
          className={`text-white font-bold transition-colors ${
            renderView === "view" ? "text-primary border-b" : ""
          }`}
        >
          Render Blog
        </button>
      </div>
    </div>
  );
};
