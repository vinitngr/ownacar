
function Cardetailskeleton() {
  return (
    <div className="w-fullfont-sans">
      <div className="py-4 animate-pulse">
        <div className="h-10 w-96 bg-gray-300 rounded-md mb-4"></div>
        <div className="h-6 w-1/2 bg-gray-200 rounded-md mb-6"></div>

        <div className="flex gap-3 mb-6">
          <div className="h-8 w-20 bg-gray-200 rounded-md"></div>
          <div className="h-8 w-24 bg-gray-200 rounded-md"></div>
          <div className="h-8 w-16 bg-gray-200 rounded-md"></div>
          <div className="h-8 w-16 bg-gray-200 rounded-md"></div>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2 space-y-6">
            <div className="w-full aspect-video bg-gray-300 rounded-md"></div>
            <div className="w-full h-40 bg-gray-200 rounded-md"></div>
            <div className="w-full h-96 bg-gray-200 rounded-md"></div>
          </div>

          <div className="space-y-6">
            <div className="w-full h-44 bg-gray-300 rounded-md"></div>
            <div className="w-full h-[500px] bg-gray-200 rounded-md"></div>
            <div className="w-full h-56 bg-gray-300 rounded-md "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardetailskeleton;
