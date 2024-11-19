import { Link2Icon } from "lucide-react"
function Carscard({listing}) {
  return (
    <div>
<div className="p-3 border-b border-gray-200 border-2 gap-3 flex flex-col justify-between h-96">
              <div className="h-40 bg-gray-200"></div>
              <div>
                <p className="font-semibold text-md mb-1">{listing.listingTitle}</p>
                <p className="line-clamp-2 text-lg text-gray-600">${listing.sellingPrice}</p>
                <div className="flex justify-between mt-3 opacity-80 scale-90 ">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://img.icons8.com/?size=100&id=41152&format=png&color=000000"
                      className="size-10"
                    ></img>
                    <div className="text-sm text-center googlehandfont mt-1">{listing.mileage} 
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={
                        listing.fuelType == "Electric"
                          ? "https://img.icons8.com/?size=100&id=6IpUNvyPYBgm&format=png&color=000000"
                          : "https://img.icons8.com/?size=100&id=3679&format=png&color=000000"
                      }
                      className="size-10"/>

                    <div className="text-sm text-center googlehandfont mt-1">{listing.fuelType}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://img.icons8.com/?size=100&id=PwpEVWVt8I3F&format=png&color=000000"
                      className="size-10 "
                    ></img>
                    <div className="text-sm text-center googlehandfont mt-1">{listing.year}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
              <button
                    className="text-gray-600 px-2 rounded-full bg-gray-300 flex gap-3">
                    Make a deal <Link2Icon/>
                  </button>
                {/* <img src='d' className="w-6 h-6 rounded-full object-cover" alt="User Profile" /> */}
              </div>
            </div>

    </div>
  )
}

export default Carscard