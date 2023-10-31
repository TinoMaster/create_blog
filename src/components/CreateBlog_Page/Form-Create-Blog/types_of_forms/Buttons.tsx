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
        className="btn btn-secondary"
      />
      <input type="submit" value="Crear Blog" className="btn btn-primary" />
    </>
  );
};
