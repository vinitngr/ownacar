import { MdLocalOffer } from "react-icons/md";
function CarPrice({Sprice , Oprice}) {
  return (
    <div className="p-6 border-2 rounded-lg">
      <p className="font-thin">our Price</p>
      <h1 className="text-4xl font-normal mb-2">${Sprice}</h1>
      <p className="text-xs text-gray-400 font-extralight">original price : ${Oprice}</p>
      <button className="bg-blue-700 text-white py-2 mt-10 rounded-lg font-normal w-full flex justify-center items-center gap-2">
      <MdLocalOffer className="scale-125"/>make An offer price
      </button>
    </div>
  )
}

export default CarPrice