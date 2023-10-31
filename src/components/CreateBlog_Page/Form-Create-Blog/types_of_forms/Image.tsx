import { AiOutlinePlusCircle } from "react-icons/ai";
import { TSectionPage } from "../../../../types/categories.type";

interface ImageProps {
  preview: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDropImage: (e: React.DragEvent<HTMLDivElement>) => void;
  sectionPage: TSectionPage;
}

export const Image = ({
  preview,
  handleImageChange,
  onDropImage,
  sectionPage,
}: ImageProps) => {
  return (
    <div
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      onDrop={(e: React.DragEvent<HTMLDivElement>) => onDropImage(e)}
      className={`flex flex-col ${
        sectionPage === "principal" ||
        sectionPage === "image" ||
        sectionPage === "video"
          ? "block"
          : "hidden"
      }`}
    >
      <div className="w-full max-w-[500px] m-auto h-52 flex flex-col justify-center items-center text-slate-400/30 bg-white/5 overflow-hidden rounded">
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
      <label htmlFor="" className="label max-w-[500px] m-auto">
        Imagen o video
      </label>
      <input
        onChange={handleImageChange}
        type="file"
        className="input max-w-[500px] m-auto label"
      />
    </div>
  );
};
