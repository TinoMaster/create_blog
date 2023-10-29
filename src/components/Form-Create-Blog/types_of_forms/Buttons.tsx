import { TSectionPage } from "../../../types/categories.type";

interface ButtonsProps {
  onSubmitSection: () => void;
  onSubmitPrincipal: () => void;
  sectionPage: TSectionPage;
}

export const Buttons = ({
  onSubmitSection,
  onSubmitPrincipal,
  sectionPage,
}: ButtonsProps) => {
  return (
    <>
      <input
        onClick={
          sectionPage === "principal" ? onSubmitPrincipal : onSubmitSection
        }
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
