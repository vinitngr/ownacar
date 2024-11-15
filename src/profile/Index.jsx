import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { listingsTable } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
function Index() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const result = await db.select().from(listingsTable)
        .where(eq(listingsTable.sellersId, user.id));
        setListings(result);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  },[user.id]);

  async function handleDelete(listingId) {
    try {
      setListings((prevListings) =>
        prevListings.filter((listing) => listing.id !== listingId)
      );
      await db.delete(listingsTable).where(eq(listingsTable.id, listingId))
      console.log("Listing deleted");
    } catch (error) {
      console.error("Error deleting listing:", error);
    }
  };

  async function handleEdit(listingId) {
    try {
      navigate(`/addListing?mode=edit`);
      console.log("Listing edited:", listingId);
    } catch (error) {
      console.error("Error editing listing:", error);
    }
  };
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

        <div className="mt-5 grid xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 sm:gridcol2 gap-4">
          {loading ? (
            Array.from({ length: 6 }).map((index) => (
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
                <div className="flex justify-between">
                  <button
                    className="text-red-600"
                    onClick={() => handleDelete(listing.id)}>
                    delete
                  </button>
                  <button
                    className="text-blue-600"
                    onClick={() => handleEdit(listing.id)}>
                    Edit
                  </button>
                </div>
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
