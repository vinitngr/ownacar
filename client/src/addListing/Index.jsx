import Header from "@/components/Header";

function AddListing() {
  return (
    <div>
      <Header />
      <div className="px-20 py-10">
        <h1 className="text-2xl font-bold googlehandfont mb-3">Add New Listing</h1>
        <form>
          <div className="flex flex-col gap-3">
            <div className="bg-red-100 h-96"></div>
            <div className="bg-red-100 h-96"></div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 googlehandfont hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-end    "
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
