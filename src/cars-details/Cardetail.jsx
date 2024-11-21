import Header from "@/components/Header"
import CarPrice from "./components/CarPrice"
import ContactOwner from "./components/ContactOwner"
import Features from "./components/Features"
import { db } from "@/lib/db"
import { listingsTable } from "@/lib/schema"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { eq } from "drizzle-orm"
import Cardetails from "./components/Cardetails"
import { SlCalender } from "react-icons/sl";
function Cardetail() {
  const [listingdetail, setlistingdetail] = useState();
  const { id } = useParams();
  console.log(id);

  const tags='flex justify-center items-center gap-1 px-2 font-semibold bg-blue-100 text-blue-500 text-sm rounded-full cursor-pointer'

  useEffect(() => {
    async function getcardetails() {
      try {
        const result = await db
          .select()
          .from(listingsTable)
          .where(eq(listingsTable.id, id));
        setlistingdetail(result);
      } catch (error) {
        console.error('Error fetching car details:', error);
      }
    }

    getcardetails();
  }, [id]); 
console.log(listingdetail)
    return (
      <div>
        <Header />
        <div className="p-10 googlehandfont">
          {listingdetail && listingdetail.length > 0 ? (
            <>
              <div className="text-4xl font-semibold py-2">{listingdetail[0].listingTitle}</div>
              <div className="mb-2 font-light">{listingdetail[0].tagline}</div>
              <div className="flex gap-2 mb-4">
                <div className={tags}> <SlCalender />{listingdetail[0].year}</div>
                <div className={tags}>{listingdetail[0].mileage} miles</div>
                <div className={tags}>{listingdetail[0].transmission}</div>
                <div className={tags}>{listingdetail[0].fuelType}</div>
              </div>
              <div className="grid grid-cols-3 gap-10">
                <div className="grid col-span-2">
                  <div className="rounded overflow-hidden">
                    <img src={`https://picsum.photos/500/300?random=10`} className="w-full h-full object-cover" alt="car pic" />
                  </div>
                  <div className="p-3 border-2 my-4 rounded">
                    <div className="text-xl mb-1 font-semibold">Description</div>
                    <p className="text-sm font-light my-2">{listingdetail[0].listingDescription}</p>
                  </div>
                  <Features />
                </div>
                <div>
                  <CarPrice price={listingdetail[0].sellingPrice} />
                  <Cardetails details={listingdetail[0]} />
                  <ContactOwner />
                </div>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    );

}

export default Cardetail




{/* <div>
<Header/>
<div className="p-10 googlehandfont">
  <div className="text-4xl font-semibold py-2">{listingdetail?.[0]?.listingTitle}</div>
  <div className="mb-2 font-light">{listingdetail?.[0]?.listingDescription}</div>
  <div className="flex gap-2 mb-4">
    <div className="px-2 font-semibold bg-blue-100 text-blue-500 text-sm rounded-full"> {listingdetail?.[0]?.year}</div>
    <div className="px-2 font-semibold bg-blue-100 text-blue-500 text-sm rounded-full">{listingdetail?.[0]?.mileage} miles</div>
    <div className="px-2 font-semibold bg-blue-100 text-blue-500 text-sm rounded-full">{listingdetail?.[0]?.transmission}</div>
    <div className="px-2 font-semibold bg-blue-100 text-blue-500 text-sm rounded-full">{listingdetail?.[0]?.fuelType}</div>
  </div>
  <div className="grid grid-cols-3 gap-10">
    <div className="grid col-span-2">
      <div>
        <img src={`https://picsum.photos/500/300?random=10`} className="w-full h-full object-cover" alt="car pic" />
      </div>
      <div className="p-3 border-2 my-4">
        <div className="text-xl mb-1 font-semibold">Description</div>
        <p className="text-sm">{listingdetail?.[0]?.description || "No description available"}</p>
      </div>
      <Features/>
    </div>
    <div >
      <CarPrice price={listingdetail?.[0]?.sellingPrice}/>
      <Cardetails details={listingdetail?.[0]}/>
      <ContactOwner/>
    </div>
  </div>
</div>
</div> */}