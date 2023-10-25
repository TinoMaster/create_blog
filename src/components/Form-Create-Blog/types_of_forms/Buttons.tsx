import { TCategory } from "../../../types/categories.type";

interface ButtonsProps {
  onSubmitSection: () => void;
  onSubmitPrincipal: () => void;
  category: TCategory;
}

export const Buttons = ({
  onSubmitSection,
  onSubmitPrincipal,
  category,
}: ButtonsProps) => {
  return (
    <>
      <input
        onClick={category === "principal" ? onSubmitPrincipal : onSubmitSection}
        type="button"
        value="Crear Seccion"
        className="p-2 bg-gray-600 rounded"
      />
      <input
        type="submit"
        value="Crear Blog"
        className="p-2 bg-violet-600 rounded"
      />
    </>
  );
};
