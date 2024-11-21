
function ContactOwner({userId}) {
 console.log(userId);
 
  return (
    <>
      <div className=" border-2 p-6">
        <h2 className="font-semibold text-xl mb-3">Seller</h2>
        <div className="flex gap-6 items-center">
          <div className="size-20 rounded-full bg-red-50"></div>
          <div>
            <div className="text-2xl">Vinit nagar</div>
            <div className="font-extralight text-sm text-zinc-600">v@gmail.com</div>
          </div>
        </div>  
          <button className="bg-blue-600 text-white w-full py-1 rounded mt-6"> Message Seller</button>
      </div>

    </>
  )
}

export default ContactOwner
