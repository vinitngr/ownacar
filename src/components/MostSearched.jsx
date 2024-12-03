import { useEffect, useState } from "react";
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

function MostSearched({ head, currentCardetails }) {
  const [popItems, setPopItems] = useState([]);
  const [skeletonCount, setSkeletonCount] = useState(1);
  const url = window.location.pathname;

  useEffect(() => {
    const updateSkeletonCount = () => {
      const container = document.querySelector(".skeleton-grid");
      if (container) {
        const computedStyle = getComputedStyle(container);
        const columns = computedStyle.getPropertyValue("grid-template-columns").split(" ").length;
        setSkeletonCount(columns);
      }
    };

    updateSkeletonCount(); 
    window.addEventListener("resize", updateSkeletonCount); 
    return () => window.removeEventListener("resize", updateSkeletonCount);
  }, []);

  useEffect(() => {
    async function fetchRandomListings() {
      if (url.includes("car/") && currentCardetails) {
        try {
          const listings = await db
            .select()
            .from(listingsTable)
            .where(
              or(
                eq(listingsTable.category, currentCardetails.category),
                eq(listingsTable.maker, currentCardetails.maker),
                eq(listingsTable.condition, currentCardetails.condition),
                eq(listingsTable.type, currentCardetails.type)
              )
            )
            .limit(8);
          setPopItems(listings);
          console.log("Fetched related car options for car details");
        } catch (error) {
          console.error("Error fetching similar options:", error);
        }
      } else {
        try {
          const listings = await db
            .select()
            .from(listingsTable)
            .orderBy(sql`RANDOM()`)
            .limit(8);
          setPopItems (listings);
          console.log("Fetched random car data for home page");
        } catch (error) {
          console.error("Error fetching random listings:", error);
        }
      }
    }

    fetchRandomListings();
  }, [currentCardetails, url]);

  return (
    <div className="mx-6 mt-24">
      <div className="text-center text-3xl p-3 googlehandfont">{head}</div>

      {popItems.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {popItems.map((car, index) => (
              <CarouselItem
                className="flex justify-center md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
                key={index}
              >
                <CarItem car={car} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="translate-x-8" />
          <CarouselNext className="-translate-x-8" />
        </Carousel>
      ) : (
        <div className="grid skeleton-grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center 2xl:grid-cols-4 gap-4">
          {Array.from({ length: skeletonCount }).map((_, i) => (
            <div key={i} className="skeleton h-96 w-[300px] animate-pulse bg-gray-300 rounded-lg "></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MostSearched;
