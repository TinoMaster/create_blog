export const Title = () => {
  return (
    <div className="flex flex-col">
      <label htmlFor="input_title">Titulo</label>
      <input
        id="input_title"
        type="text"
        className="p-2 rounded bg-white/10 placeholder:text-slate-100/20 font-thin focus:outline-none shadow"
        placeholder="Titulo del contenido..."
      />
    </div>
  );
};
