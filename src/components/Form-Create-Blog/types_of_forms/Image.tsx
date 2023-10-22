import { AiOutlinePlusCircle } from "react-icons/ai";

interface ImageProps {
  preview: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDropImage: (e: React.DragEvent<HTMLDivElement>) => void;
}

export const Image = ({
  preview,
  handleImageChange,
  onDropImage,
}: ImageProps) => {
  return (
    <div
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => onDropImage(e)}
      className="flex flex-col"
    >
      <div className="w-full h-52 flex flex-col justify-center items-center text-slate-400/30 bg-white/5 overflow-hidden rounded">
        {preview ? (
          <img src={preview} alt="" className="w-full h-full object-cover" />
        ) : (
          <>
            <p className="text-lg">Imagen o video</p>
            <p className="">arrastrar aqui</p>
            <AiOutlinePlusCircle className="text-2xl" />
          </>
        )}
      </div>
      <label htmlFor="">Imagen o video</label>
      <input onChange={handleImageChange} type="file" />
    </div>
  );
};
