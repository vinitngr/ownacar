import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { listingsTable } from "@/lib/schema";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/clerk-react";
import Skeleton from "@/components/Skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Edit, Trash } from "lucide-react";
import { toast } from "sonner";

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



  async function handleDelete(listing) {
    // eslint-disable-next-line no-unused-vars
    const {id , ...otherInListing} = listing;

    try {
      await db.delete(listingsTable).where(eq(listingsTable.id, listing.id));

      setListings((prevListings) =>
        prevListings.filter((l) => l.id !== listing.id)
      );
      
      toast('Listing deleted successfully', {
        cancel: {
          label: 'Undo',
          onClick: async () => {
            try {
              await db.insert(listingsTable).values(otherInListing);
              setListings((prevListings) => [...prevListings, listing]);
              console.log("Listing Restored:", listing.id);
            } catch (insertError) {
              console.error("Error restoring listing:", insertError);
              toast('Failed to restore listing', { type: 'error' });
            }
          },
        },
      } , {duration: 3000});
      toast.success('Listing Deleted successfully' , {duration:1000})
      console.log('listing deleted successfully');
      
    } catch (error) {
      console.error("Error deleting listing:", error);
      toast('Failed to delete listing', { type: 'error' });
    }
  }

  async function handleEdit(listing) {
    try {
      navigate(`/addListing?mode=edit`  , {state : {listing : listing}});
      console.log("Listing To Edit:", listing.id);
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
            className="p-1 border-b border-gray-200 border-2 gap-3 flex flex-col justify-between">
              <div className="h-40 bg-gray-200 overflow-hidden">
                <img 
                onClick={()=> navigate(`/car/${listing.id}` , {state : {listing : listing}})}
                src={listing.imageUrl} className="object-cover w-full h-full" />
              </div>

              <div className="p-3">
                <p className="font-semibold text-md mb-2">{listing.listingTitle}</p>
                <p className="line-clamp-1 text-sm  text-gray-600">{listing.listingDescription}</p>
                <div className="mt-4">
                  <div className="flex justify-between mt-3 opacity-80 scale-90">
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
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 w-full ">

                  <button
                    className="text-gray-600 bg-gray-200 flex-1 flex justify-center gap-2 items-center rounded border"
                    onClick={() => handleEdit(listing)}>
                    <Edit/>Edit
                  </button>
                  
                  <AlertDialog>
                    <AlertDialogTrigger
                      className="delete text-red-400 rounded p-1 w-14 flex justify-center bg-red-100">
                      <Trash/>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to delete your listing?</AlertDialogTitle>
                        <AlertDialogDescription>
                          you are deleting <span className="text-red-700 cursor-pointer">{listing.listingTitle} </span>
                          from Your Listing ? This action can`t be undone later on
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction variants='destructive'
                        onClick={() => {
                          handleDelete(listing)
                        }}
                        className='bg-red-500 hover:bg-red-600'>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

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
