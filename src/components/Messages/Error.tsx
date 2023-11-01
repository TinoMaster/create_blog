export const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <div className="absolute -top-10 right-0 bg-red-400 text-white text-center rounded-md p-2">
      {error}
    </div>
  );
};
