/* eslint-disable no-unused-vars */
import { useUser } from "@clerk/clerk-react";
import Header from "@/components/Header";
import InputField from "./components/InputField";
import Dropdown from "./components/Dropdown";
import Data from "../data/inputFieldData.json";
import Features from "../data/Features.json";
import Textarea from "./components/Textarea";
import { useEffect, useState } from "react";
import UploadImage from "./components/UploadImage";
import { db } from "@/lib/db";
import { listingsTable } from "../lib/schema";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { eq } from "drizzle-orm";
import CheckBox from "./components/CheckBox";
import { toast } from "sonner";


function AddListing() {
  // Navigation and Location hooks
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Clerk user information
  const { user } = useUser();

  // State management
  const [formData, setFromData] = useState({});
  const [features, setFeatures] = useState({});
  const [images, setImages] = useState([]);

  // Determine if we are in "edit" mode
  const mode = searchParams.get("mode");
  const { listing } = location.state || {};

  // Populate fields if in edit mode
  useEffect(() => {
    if (mode === "edit" && listing) {
      setFromData(listing);
        setFeatures(listing.features);
    }
  }, [mode, listing]);

  // Handle input data for form fields
  const handleInputData = (name, value) => {
    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Handle input data for features
  const handleFeatures = (name, value) => {
    setFeatures((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    // If editing an existing listing
    if (mode === "edit") {
      try {
        const { id, ...updateData } = formData;
        const result = await db
          .update(listingsTable)
          .set({
            ...updateData,
            sellersId: user.id,
            features: features,
          })
          .where(eq(listingsTable.id, listing.id))
          .returning({ id: listingsTable.id });
          toast.success('Listing Updated successfully' , {duration:1500})
          console.log('listing edited successfully' , result[0].id) ;
        } catch (error) {
          console.error("Error while updating data:", error);
          toast.error('Error Updating Listing' , {duration:1500})
        }finally{
          navigate("/profile"); 
      }
    } 
    // If creating a new listing
    else {
      if (!user) {
        console.error("User not authenticated");
        return;
      }
      try {
        const result = await db
          .insert(listingsTable)
          .values({
            ...formData,
            sellersId: user.id,
            features: JSON.stringify(features),
          })
          .returning({ id: listingsTable.id });
          toast.success('Listing Added successfully' , {duration:1500})
          console.error('Listing added successfully' , result[0].id);
        } catch (error) {
          console.error("Error inserting data:", error);
          toast.error('Error adding listing' , {duration:1500})
        }finally{
          navigate("/profile"); // Redirect on success
        }
    }
  };

  return (
    <div>
      <Header />
      <div className="px-3 sm:px-10 py-10">
        <h1 className="text-2xl font-bold googlehandfont mb-3">
          Add New Listing
        </h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col gap-3">

            {/* Input Fields */}
            <div className="border-zinc-400 border-2 p-5 ">
              <div className="mb-4 text-xl googlehandfontlb">Car Details</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Data.inputFields.map((item, index) => (
                  <div key={index}>
                    <label>
                      {item.label}
                      {item.required ? <span className="text-red-500 ml-1">*</span> : ""}
                    </label>
                    {item.fieldType === "text" || item.fieldType === "number" ? (
                      <InputField item={item} listing={listing} handleInputData={handleInputData} />
                    ) : item.fieldType === "dropdown" ? (
                      <Dropdown item={item} listing={listing} handleInputData={handleInputData} />
                    ) : item.fieldType === "textarea" ? (
                      <Textarea item={item} des={listing?.listingDescription} handleInputData={handleInputData} />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {/* CheckBox */}
            <div className="ring-1 ring-zinc-500 p-5 ">
              <div className="googlehandfontlb mb-2 text-xl ">Features</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Features.features.map((item, index) => (
                  <CheckBox key={index} features={listing?.features} item={item} handleFeatures={handleFeatures}/>
                ))}
              </div>
            </div>

            {/* UploadImage */}
            <div className="border-2 border-zinc-400 p-5">
              <UploadImage images={images} setImages={setImages}/>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 googlehandfont hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


export default AddListing;
