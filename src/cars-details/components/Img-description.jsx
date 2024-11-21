
function Imgdescription({listing}) {
  return (
    <>
        <div className="rounded overflow-hidden">
        <img src={listing.imageUrl} className="w-full h-full object-cover" alt="car pic" />
        </div>
        <div className="p-3 border-2 my-4 rounded">
          <div className="text-xl mb-4  font-semibold">Description</div>
          <p className="text-sm font-light my-2">{listing.listingDescription}</p>
        </div>
    </>
  )
}

export default Imgdescription