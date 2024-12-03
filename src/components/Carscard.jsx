import { Link2Icon } from "lucide-react"
import { useNavigate } from "react-router-dom"
function Carscard({listing}) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="border-b rounded-lg border-gray-200 border-2 gap-3 flex flex-col justify-between h-96">
          <div className="overflow-hidden">
            <img src={listing.imageUrl} className="object-cover w-full h-full" />
          </div>
          <div className="px-3">
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
                      : listing.fuelType == "Hybrid"
                        ? "https://img.icons8.com/?size=100&id=cy8FC3SRB9Zb&format=png&color=000000"
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
          <div className="flex justify-between p-1 gap-2" >
          <button
                className="text-gray-600  flex-grow flex h-8 justify-center items-center rounded bg-gray-300 gap-3"
                onClick={()=> navigate(`/car/${listing.id}` , {state : { listing : listing }})}>
                Make a deal <Link2Icon/>
              </button>
            <div className="size-8 rounded border-2  overflow-hidden"><img src={listing.userImageUrl} className="w-full h-full object-cover" alt="User Profile" /></div>
          </div>
      </div>
    </div>
  )
}

export default Carscard