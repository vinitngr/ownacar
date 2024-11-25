import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { listingsTable } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import Skeleton from "@/components/Skeleton";
import Swal from 'sweetalert2';

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
          const result = await Swal.fire({
              title: 'Are you sure?',
              text: "Are you sure you want to delete this listing?",
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes',
              cancelButtonText: 'Cancel',
              customClass: {
                  popup: 'bg-gray-100 rounded-lg p-2',
                  title: 'text-xl font-bold text-red-500',
              }
          });
  
          if (result.isConfirmed) {
              setListings((prevListings) =>
                  prevListings.filter((listing) => listing.id !== listingId)
              );
              await db.delete(listingsTable).where(eq(listingsTable.id, listingId));
              Swal.fire('Deleted!', 'Your listing has been deleted.', 'success');
          }
      } catch (error) {
          console.error("Error deleting listing:", error);
          Swal.fire('Error!', 'There was an issue deleting the listing.', 'error');
      }
  }
  

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
      <div 
  
      className="p-10">
        <div className="flex justify-between">
          <div className="text-3xl googlehandfont font-bold">My Listings</div>
          <Link to="/addListing">
            <Button className="bg-blue-600 googlehandfont rounded-full text-white hover:text-black">
              + Add New Listing
            </Button>
          </Link>
        </div>

        <div className="mt-5 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 sm:grid-col-2 gap-6 h-96">
          {loading ? (
            Array.from({ length: 6 }).map((index) => (
              <Skeleton key={index} />
            ))
          ) : listings.length > 0 ? (
            listings.map((listing) => (
              <div 
              key={listing.id} 
              className="p-3 border-b border-gray-200 border-2 gap-3 flex flex-col justify-between">
                <div className="h-40 bg-gray-200 overflow-hidden">
                  <img 
                  onClick={()=> navigate(`/car/${listing.id}`)}
                  src={listing.imageUrl} className="object-cover w-full h-full" />
                </div>

                <div>
                  <p className="font-semibold text-md mb-2">{listing.listingTitle}</p>
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
                  <div className="flex gap-2 w-full">
                    <button
                      className="text-red-300 w-1/2 rounded-full bg-red-100"
                      onClick={() => handleDelete(listing.id)}>
                      delete
                    </button>
                    <button
                      className="text-blue-400 w-1/2 rounded-full bg-blue-100"
                      onClick={() => handleEdit(listing.id)}>
                      Edit
                    </button>
                  </div>
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
