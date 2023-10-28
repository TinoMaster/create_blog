const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blue-900/10 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-primary border-t-primary border-r-2 border-r-primary"></div>
    </div>
  );
};

export default LoadingPage;
