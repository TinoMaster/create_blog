import { TSectionPage } from "../../../../types/categories.type";

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
        className="btn bg-secondary/50 hover:cursor-pointer hover:bg-secondary/70 transition-colors"
      />
      <input
        type="submit"
        value="Crear Blog"
        className="btn bg-primary/50 hover:cursor-pointer hover:bg-primary/80 transition-colors"
      />
    </>
  );
};
