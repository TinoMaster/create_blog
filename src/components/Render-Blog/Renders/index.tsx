import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { EditButton } from "./EditButton";
import { RENDER_ALL_BLOG, RENDER_PRINCIPAL } from "../../../data/const";
import { Header } from "./Header";
import { Sections } from "./Sections";

interface RendersProps {
  deleteSection: () => void;
  deleteBlog: () => void;
  render: string;
}

export const Renders = ({
  deleteSection,
  deleteBlog,
  render,
}: RendersProps) => {
  const { title, sections } = useSelector((state: RootState) => state.blog);
  return (
    <div className="flex flex-col">
      {title || sections.length > 0 ? (
        <EditButton
          deleteSection={deleteSection}
          render={render}
          deleteBlog={deleteBlog}
        />
      ) : (
        <p className="text-center font-serif text-xl">
          Cree su primera seccion
        </p>
      )}

      {render === RENDER_ALL_BLOG || render === RENDER_PRINCIPAL ? (
        <Header />
      ) : null}
      {render !== RENDER_PRINCIPAL ? <Sections render={render} /> : null}
    </div>
  );
};
