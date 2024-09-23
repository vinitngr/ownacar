import Header from "@/components/Header";
import InputField from "./components/InputField";
import Dropdown from "./components/dropdown";
// import inputfielddata from '../data/i'
import inputFieldData from "../data/inputFieldData.json";
import Textarea from "./components/textarea";
function AddListing() {
  console.log(inputFieldData);
  return (
    <div>
      <Header />
      <div className="px-3 sm:px-10 py-10">
        <h1 className="text-2xl font-bold googlehandfont mb-3">
          Add New Listing
        </h1>
        <form>
          <div className="flex flex-col gap-3">
            <div className="border-zinc-400 border-2 p-5 pt-10 grid grid-cols-2 gap-3">
              {inputFieldData.inputFields.map((item, index) => (
                <div key={index}>
                  <label className="">{item.label}{item.required ? (<label className="text-red-500 ml-1">*</label>) : ""}</label>
                  {item.fieldType === "text" ||
                    item.fieldType === "number" ? <InputField item={item} /> :
                    item.fieldType === "dropdown" ? <Dropdown item={item} /> : 
                    item.fieldType === "textarea" ? <Textarea item={item}/>  :
                    null}
                </div>
              ))}
            </div>
            <div className="bg-red-100 h-96"></div>
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
