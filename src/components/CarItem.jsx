/* eslint-disable react/prop-types */
function CarItem({ car }) {
  return (
    <div className="p-14 select-none">
      <div className="border-2 border-zinc-900 rounded-xl w-[300px] p-2 bg-yellow-50">
        <div className="w-[100%] h-[200px] rounded-xl border-2 border-black bg-blue-100 overflow-hidden">
          <img
            src="https://a4.pbase.com/o12/65/1039165/1/173131788.M7hM7s5O.BB021511SkyResize.jpg"
            className="w-[100%]"
            alt={car?.name} 
          />
        </div>
        <div className="text-xl font-semibold googlehandfont border-b-2 py-2 mx-1 truncate border-black">
          {car.name}
        </div>
        <div className="flex justify-between mx-1 p-6 border-b-2 border-black">
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=41152&format=png&color=000000"
              className="size-10"
            ></img>
            <div className="text-sm text-center googlehandfont mt-1">
              {car.miles}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={
                car.Fuel == "Electric"
                  ? "https://img.icons8.com/?size=100&id=6IpUNvyPYBgm&format=png&color=000000"
                  : "https://img.icons8.com/?size=100&id=3679&format=png&color=000000"
              }
              className="size-10"/>

            <div className="text-sm text-center googlehandfont mt-1">
              {car.Fuel || "Fuel"}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.icons8.com/?size=100&id=PwpEVWVt8I3F&format=png&color=000000"
              className="size-10 "
            ></img>
            <div className="text-sm text-center googlehandfont mt-1">
              {car.year || "Year"}
            </div>
          </div>
        </div>
        <div className="flex mx-1 justify-between py-2 items-center">
          <div className="text-lg font-semibold googlehandfont">
            ${car.price}
          </div>
          <a href="#" className="text-blue-700 underline">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarItem;
