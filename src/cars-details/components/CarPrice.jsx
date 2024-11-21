
function CarPrice({price}) {
  return (
    <div className="p-6 border-2 rounded-lg">
      <p className="font-thin">our Price</p>
      <h1 className="text-4xl font-normal">${price}</h1>
      <button className="bg-blue-700 text-white py-2 mt-10 rounded-lg font-normal w-full">
        make An offer price
      </button>
    </div>
  )
}

export default CarPrice