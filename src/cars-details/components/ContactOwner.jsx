
function ContactOwner({details}) {
  return (
    <>
      <div className=" border-2 p-6 lg:order-3 order-3 rounded-lg" >
        <h2 className="font-semibold text-xl mb-3">Seller</h2>
        <div className="flex gap-6 items-center">
          <div className="size-20 rounded-tl-3xl rounded-br-3xl rounded overflow-hidden bg-red-50">
            <img src={details.userImageUrl} className="h-full w-full object-cover"/>
          </div>
          <div>
            <div className="text-2xl">{details.username}</div>
            <div className="font-extralight text-sm text-zinc-600">{details.userEmail.replace(/^(\w+?)(\d+)(@gmail\.com)$/, "*****$2$3")}</div>
          </div>
        </div>  
          <button className="bg-blue-600 text-white w-full py-1 rounded mt-6"> Message Seller</button>
      </div>

    </>
  )
}

export default ContactOwner
