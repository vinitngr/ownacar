import Header from "@/components/Header";
import InputField from "./components/InputField";
import Dropdown from "./components/dropdown";
// import inputfielddata from '../data/i'
import inputFieldData from "../data/inputFieldData.json";
import Textarea from "./components/textarea";
import Features from "../data/Features.json";

function AddListing() {
  return (
    <div>
      <Header />
      <div className="px-3 sm:px-10 py-10">
        <h1 className="text-2xl font-bold googlehandfont mb-3">
          Add New Listing
        </h1>
        <form>
          <div className="flex flex-col gap-3">
            <div className="border-zinc-400 border-2 p-5 ">
              <div className="mb-4 text-xl googlehandfontlb">car details</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {inputFieldData.inputFields.map((item, index) => (
                  <div key={index}>
                    <label className="">
                      {item.label}
                      {item.required ? (
                        <label className="text-red-500 ml-1">*</label>
                      ) : (
                        ""
                      )}
                    </label>
                    {item.fieldType === "text" ||
                    item.fieldType === "number" ? (
                      <InputField item={item} />
                    ) : item.fieldType === "dropdown" ? (
                      <Dropdown item={item} />
                    ) : item.fieldType === "textarea" ? (
                      <Textarea item={item} />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
            {/* <h2 className="googlehandfont text-3xl">Features</h2> */}
            <div className="ring-1 ring-zinc-500 p-5 ">
              <div className="googlehandfontlb mb-2 text-xl ">Features</div>
              <div className="grid grid-cols-3 gap-2">
                {Features.features.map((item, index) => (
                  <div key={index} className="p-1 flex border ">
                    <label className="flex items-center flex-row-reverse">
                      {item.label}
                      <input
                        className="m-2 size-4"
                        name={item.name}
                        placeholder={item.label}
                        type={item.fieldType}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 googlehandfont hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-end"
              >
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
