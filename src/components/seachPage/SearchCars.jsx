import { useSearchParams } from "react-router-dom";
import Search from "../Search";
import { useEffect, useState } from "react";
import { listingsTable } from "@/lib/schema";
import { db } from "@/lib/db";
import { eq, sql } from "drizzle-orm";
import Header from "../Header";
import Skeleton from "../Skeleton";
import Carscard from "../Carscard";
function SearchCars() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchParams] = useSearchParams();
  
  const category = searchParams.get('category');
  const condition = searchParams.get('condition');
  
  useEffect(() => {
  const fetchListings = async () => {
      setLoading(true); 
      if (category || condition) {
        const query = db.select().from(listingsTable);
        if (category) {
            query.where(sql`lower(${listingsTable.category}) = ${category.toLowerCase()}`);
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
          listings.map((listing, index ) => (
            <Carscard key={index} listing={listing}/>
          ))
        ) : (
          <p>No listings available.</p>
        )}
      </div>
    </div>
  );
}

export default SearchCars;
