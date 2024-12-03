import { useUser } from "@clerk/clerk-react"; 
import { db } from "@/lib/db";
import { listingsTable } from "@/lib/schema"; 
import { eq } from "drizzle-orm";
import { toast } from "sonner";
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
import { Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
function DeleteListingButton({ listingId , userName }) {
  const { user } = useUser();
  const navigate= useNavigate()
  const isSuperAdmin = user?.publicMetadata?.role === "superadmin";

  const handleDelete = async () => {
    try {
      await db.delete(listingsTable).where(eq(listingsTable.id, listingId)); 
      toast.success('listing delete succesfully' , {duration:1000})
      navigate(-1)
    } catch (error) {
      console.error("Error deleting listing:", error);
      alert("Failed to delete listing.");
    }
  };

  return (
  
    isSuperAdmin && (
      <>
      <AlertDialog>
        <AlertDialogTrigger
          className="delete text-red-400 rounded p-1 gap-2  flex justify-center bg-red-100">
          Delete <Trash/>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete your listing?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this item from user : {userName}? this action can`t be undo and this will reflect change in another users too
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variants='destructive'
            onClick={() => {
              handleDelete(handleDelete)
            }}
            className='bg-red-500 hover:bg-red-600'>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      </>
    )
  );
}

export default DeleteListingButton;
