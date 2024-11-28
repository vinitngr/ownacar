import { useSearchParams } from "react-router-dom";
import Search from "../Search";
import { useEffect, useState } from "react";
import { listingsTable } from "@/lib/schema";
import { db } from "@/lib/db";
import { and, between, sql } from "drizzle-orm";
import Header from "../Header";
import Skeleton from "../Skeleton";
import Carscard from "../Carscard";
function SearchCars() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchParams] = useSearchParams();
  
  const category = searchParams.get('category');
  const condition = searchParams.get('condition');
  const maker = searchParams.get('maker');
  const price = searchParams.get('price');
  const baseprice= Number(price?.split('$')[0])
  const upperprice= Number(price?.split('$-')[1].split('$')[0])
  const segment = searchParams.get('segment');
  // console.log(category , maker , baseprice , upperprice , typeof baseprice  , condition);
  useEffect(() => {
const fetchListings = async () => {
    setLoading(true); 
    if (category || condition || maker || baseprice || upperprice || segment ) {
      const result = await db.select().from(listingsTable)
      .where(
        and(
          category ? sql`lower(${listingsTable.category}) = ${category.toLowerCase()}` : sql`true`,
          condition ? sql`lower(${listingsTable.condition}) = ${condition.toLowerCase()}` : sql`true`,
          maker ? sql`lower(${listingsTable.maker}) = ${maker.toLowerCase()}` : sql`true`,
          baseprice && upperprice ? between(listingsTable.sellingPrice, baseprice, upperprice) : sql`true` ,
          segment ? sql`lower(${listingsTable.type}) = ${segment.toLowerCase()}` : sql`true`
        )).limit(10);
      setListings(result);
    }else{
        const result = await db.select().from(listingsTable).limit(5);
        setListings(result);
    }
      setLoading(false); 
    };

    fetchListings();
  }, [category, condition , maker , baseprice , upperprice , segment]); 

  return (
    <div>
      <Header/>
      <div className="flex justify-center bg-[#DBEAFE] p-10 ">
      <Search />
      </div>
      <div className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 gap-6 p-10">
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
