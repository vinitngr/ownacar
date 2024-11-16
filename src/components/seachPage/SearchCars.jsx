import { useSearchParams } from "react-router-dom";
import Search from "../Search";
import { useEffect, useState } from "react";
import { listingsTable } from "@/lib/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import Header from "../Header";
import { useUser } from "@clerk/clerk-react";
import { Link2Icon } from "lucide-react";
import Skeleton from "../Skeleton";
function SearchCars() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const condition = searchParams.get('condition');
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useUser()
  useEffect(() => {
    const fetchListings = async () => {
      setLoading(true); 
      if (category || condition) {
        const query = db.select().from(listingsTable);
        if (category) {
            query.where(eq(listingsTable.category, category.toLowerCase()));
        }
        if (condition) {
            query.where(eq(listingsTable.type, condition.toLowerCase()));
        }
    
        const result = await query; 
        setListings(result);
    }else{
        const result = await db.select().from(listingsTable);
        setListings(result);
    }
      setLoading(false); 
    };

    fetchListings();
  }, [category, condition]); 

  return (
    <div>
      <Header/>
      <div className="flex justify-center bg-[#DBEAFE] p-10 ">
      <Search />
      </div>
      <div className="text-center">Search Type= {category}</div>
      <div className="mt-5 grid xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 sm:gridcol2 gap-4 p-10">
        {loading ? (
          Array.from({ length: 6 }).map(index => (
            <Skeleton key={index}/> 

          ))
        ) : listings.length > 0 ? (
          listings.map((listing) => (
            <div key={listing.id} className="p-3 border-b border-gray-200 border-2 gap-3 flex flex-col justify-between">
              <div className="h-40 bg-gray-200"></div>
              <div>
                <p className="font-semibold text-md mb-1">{listing.listingTitle}</p>
                <p className="line-clamp-2 text-sm  text-gray-600">{listing.listingDescription}</p>
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
                <img src={user.imageUrl} className="w-6 h-6 rounded-full object-cover" alt="User Profile" />
              </div>
            </div>
          ))
        ) : (
          <p>No listings available.</p>
        )}
      </div>
    </div>
  );
}

export default SearchCars;
