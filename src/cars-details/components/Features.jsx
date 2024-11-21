import {  CheckIcon} from "lucide-react"

function Features({features}) {
  console.log(features)
  return (
    <div>
      <div className="p-3 border-2 my-4 rounded">
      <div className="text-xl mb-2 font-semibold">Features</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {Object.entries(features).map(([features , value])=>(
        <div 
        className="flex font-light items-center gap-2 m-1 overflow-hidden"
        key={features}> {value && <CheckIcon className="bg-blue-200 rounded-full text-blue-700 min-w-4   size-4"/>}{features} 
        </div>
      ))}
      </div>
      </div>
    </div>
  )
}

export default Features