export const Content = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="text-area">Contenido</label>
      <textarea
        name="content"
        id="text-area"
        rows={10}
        placeholder="Agregue el contenido..."
        className="resize-none bg-white/10 overflow-auto placeholder:text-slate-100/20 rounded p-2 focus:outline-none"
      ></textarea>
    </div>
  );
};
