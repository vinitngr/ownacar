import { useNavigate } from "react-router-dom";
function CarItem({ car }) {
  const navigate = useNavigate();
  return (
    <div className="py-5 select-none">
      <div className="border-2 border-zinc-900 rounded-xl w-[300px] p-2 bg-yellow-50">
        <div className="w-[100%] h-[200px] rounded-xl border-2 border-black bg-blue-100 overflow-hidden">
          <img
            src={car.imageUrl}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-xl font-semibold googlehandfont border-b-2 py-2 mx-1 truncate border-black">
          {car.listingTitle}
        </div>
        <div className="flex justify-between mx-1 p-6 border-b-2 border-black">
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=41152&format=png&color=000000"
              className="size-10"
            ></img>
            <div className="text-sm text-center googlehandfont mt-1">{car.mileage}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={
                car.fuelType == "Electric"
                  ? "https://img.icons8.com/?size=100&id=6IpUNvyPYBgm&format=png&color=000000"
                  : "https://img.icons8.com/?size=100&id=3679&format=png&color=000000"
              }
              className="size-10"/>

            <div className="text-sm text-center googlehandfont mt-1">{car.fuelType}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=PwpEVWVt8I3F&format=png&color=000000"
              className="size-10 "
            ></img>
            <div className="text-sm text-center googlehandfont mt-1">{car.year}
            </div>
          </div>
        </div>
        <div className="flex mx-1 justify-between py-2 items-center">
          <div className="text-lg font-semibold googlehandfont">
          </div>
          <p className="text-blue-700 cursor-pointer"
          onClick={() => {
            navigate(`/car/${car.id}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          >
          
            View Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
