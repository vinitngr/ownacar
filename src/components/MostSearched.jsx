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
import { eq, or, sql } from "drizzle-orm";
import { db } from "@/lib/db";



function MostSearched({head ,  currentCardetails}) {
  const [popItems, setPopItems] = useState([]);
  const url= window.location.pathname

  useEffect(() => {
    async function fetchRandomListings() {
      if(url.includes('car/')  && currentCardetails){
        try {
          const listings = await db
          .select()
          .from(listingsTable)
          .where(
            or(
              eq(listingsTable.category , currentCardetails.category  ),
              eq(listingsTable.maker , currentCardetails.maker),
              eq(listingsTable.condition , currentCardetails.condition)
            ))
          .limit(8);
          setPopItems(listings);
          console.log('feteched related car options for car details')
        } catch (error) {
          console.error("Error fetching similar options:", error);
        }
      }else{
        try {
          const listings = await db
          .select()
          .from(listingsTable)
          .orderBy(sql`RANDOM()`)
          .limit(8);
          setPopItems(listings);
          console.log('feteched random car data for home page')
        } catch (error) {
          console.error("Error fetching random listings:", error);
        }
      }
      
    }

    fetchRandomListings();
  }, [currentCardetails , url]);


  return (
    <div className="mx-6 mt-24">
      <div className="text-center text-3xl p-3 googlehandfont">
        {head}
      </div>

      <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      >
        <CarouselContent
        >
          {popItems.map((car, index) => (
            <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
              key={index}
            >
              <CarItem car={car} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='translate-x-8'/>
        <CarouselNext className='-translate-x-8'/>
      </Carousel>
    </div>
  );
}

export default MostSearched;
