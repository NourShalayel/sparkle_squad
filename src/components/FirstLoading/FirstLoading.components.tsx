

const FirstLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-50">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-blue-600 text-xl font-semibold">Loading</p>
      </div>
    </div>
  );
};

export default FirstLoading;


