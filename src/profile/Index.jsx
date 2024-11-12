import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { listingsTable } from "@/lib/schema";

function Index() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const result = await db.select().from(listingsTable);
        setListings(result);
        console.log("Fetched Listings:", result); 
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };
    
    fetchListings();
      }, []); 

  return (
    <div>
      <Header />
      <div className="p-10">
        <div className="flex justify-between">
          <div className="text-3xl googlehandfont font-bold">My Listings</div>
          <Link to="/addListing">
            <Button className="bg-blue-600 googlehandfont rounded-full text-white hover:text-black">
              + Add New Listing
            </Button>
          </Link>
        </div>

        <div
        className="mt-5 grid xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 sm:gridcol2 gap-4">
          {listings.length > 0 ? (
            listings.map((listing, index) => (
              <div key={index} className="p-3 border-b border-gray-200 border-2">
                <p>{listing.listingTitle}</p>
                <p>{listing.listingDescription}</p>
              </div>
            ))
          ) : (
            <p>No listings available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
