import { useEffect, useState } from "react";
// import fakeData from "../data/fakeData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CarItem from "./CarItem";
import { listingsTable } from "@/lib/schema";     
import { sql } from "drizzle-orm";
import { db } from "@/lib/db";

function MostSearched() {
  const [popItems, setPopItems] = useState([]);
  
  useEffect(() => {
    async function fetchRandomListings() {
      try {
        const listings = await db
          .select()
          .from(listingsTable)
          .orderBy(sql`RANDOM()`)
          .limit(8);
        setPopItems(listings);
      } catch (error) {
        console.error("Error fetching random listings:", error);
      }
    }

    fetchRandomListings();
  }, []);


  return (
    <div className="mx-20 mt-24">
      <div className="text-center text-3xl p-3 googlehandfont">
        Most Searched Cars
      </div>

      <Carousel>
        <CarouselContent>
          {popItems.map((car, index) => (
            <CarouselItem
              className="flex justify-center md:basis-1/2 lg:basis-1/3 mx-3 2xl:basis-1/4"
              key={index}
            >
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostSearched;
