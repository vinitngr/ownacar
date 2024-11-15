import { useSearchParams } from "react-router-dom";
import Search from "../Search";
import { useEffect, useState } from "react";
import { listingsTable } from "@/lib/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import Header from "../Header";
function SearchCars() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const condition = searchParams.get('condition');
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

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
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="p-3 border-b border-gray-200 border-2 animate-pulse">
              <div className="h-40 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))
        ) : listings.length > 0 ? (
          listings.map((listing) => (
            <div key={listing.id} className="p-3 border-b border-gray-200 border-2">
              <p>{listing.listingTitle}</p>
              <p>{listing.listingDescription}</p>
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
