import { useUser } from "@clerk/clerk-react";
import Header from "@/components/Header";
import InputField from "./components/InputField";
import Dropdown from "./components/dropdown";
import inputFieldData from "../data/inputFieldData.json";
import Textarea from "./components/textarea";
import Features from "../data/Features.json";
import { useState } from "react";
import UploadImage from "./components/UploadImage";
import { db } from "@/lib/db";
import { listingsTable } from "../lib/schema";
import { useNavigate} from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function AddListing() {
  const navigate = useNavigate()
  const { user } = useUser(); 
  const [formData, setFromData] = useState({}); 
  const [features, setFeatures] = useState({});
  const [images, setImages] = useState([]);
//const [triggerUploadImages, settriggerUploadImages] = useState('')
 
  // const searchParams = useSearchParams()[0];
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  
  const handleInputData = (name, value) => {
    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFeatures = (name, value) => {
    setFeatures((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error("User not authenticated");
      return; 
    }
    try {
      const result = await db.insert(listingsTable).values({ 
      ...formData ,
      sellersId: user.id , 
      features: JSON.stringify(features)
      }).returning({id: listingsTable.id});

      if(result){
        // settriggerUploadImages(result[0]?.id)
        navigate('/profile') ;
      }
      
    } catch (error) {
      console.error("Error inserting data:", error);
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
            <div className="border-zinc-400 border-2 p-5 ">
              <div className="mb-4 text-xl googlehandfontlb">Car Details</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {inputFieldData.inputFields.map((item, index) => (
                  <div key={index}>
                    <label>
                      {item.label}
                      {item.required ? <span className="text-red-500 ml-1">*</span> : ""}
                    </label>
                    {item.fieldType === "text" || item.fieldType === "number" ? (
                      <InputField item={item} handleInputData={handleInputData} />
                    ) : item.fieldType === "dropdown" ? (
                      <Dropdown item={item} handleInputData={handleInputData} />
                    ) : item.fieldType === "textarea" ? (
                      <Textarea item={item} handleInputData={handleInputData} />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="ring-1 ring-zinc-500 p-5 ">
              <div className="googlehandfontlb mb-2 text-xl ">Features</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Features.features.map((item, index) => (
                  <div key={index} className="p-1 flex border ">
                    <label className="flex items-center flex-row-reverse">
                      {item.label}
                      <input
                        onChange={(e) => handleFeatures(item.name, e.target.checked)}
                        className="m-2 size-4"
                        name={item.name}
                        type={item.fieldType}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 border-zinc-400 p-5">
              <UploadImage images={images} setImages={setImages}/>
            </div>
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
