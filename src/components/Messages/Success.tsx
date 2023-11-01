export const SuccessMessage = ({ message }: { message: string }) => {
  return (
    <div className="absolute -top-10 right-0 bg-green-400 text-white text-center rounded-md p-2">
      {message}
    </div>
  );
};
