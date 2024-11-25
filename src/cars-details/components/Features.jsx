import { CheckIcon, X } from "lucide-react"
import data from "../../data/Features.json"
function Features({ features }) {

  return (
    <div>
      <div className="p-3 border-2 rounded">
        <div className="text-xl mb-4 font-semibold">Features</div>
        <div className="grid grid-cols-2 md:grid-cols-3">
        {data.features.map((s, index) => (
        <div
          className="flex font-light text-xs xl:text-base items-center gap-2 m-1 overflow-hidden"
          key={index}
        >
          {features[s.name] ? (
            <CheckIcon className=" bg-blue-200 rounded-full text-blue-700  size-3  xl:size-4" />
          ) : (
            <X className="bg-red-200 rounded-full text-red-700  size-3  xl:size-4" />
          )}
          {s.name}
        </div>
      ))}

        </div>
      </div>
    </div>
  )
}

export default Features