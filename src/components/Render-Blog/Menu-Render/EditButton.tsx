interface EditButtonProps {
  deleteSection: () => void;
}

export const EditButton = ({ deleteSection }: EditButtonProps) => {
  return (
    <div className="absolute right-0 p-2 flex gap-2">
      <button className="btn btn-secondary">Editar</button>
      <button onClick={deleteSection} className="btn bg-red-400/80">
        Eliminar
      </button>
    </div>
  );
};
