
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
function Dropdown({item , handleInputData}) {
  return (
    <div>
      <Select 
      onValueChange={(value) => handleInputData(item.name, value)}  
      name={item.name} placeholder={item.label} type={item.fieldType} required={item.required}  >
        <SelectTrigger className="w-full rounded mt-1 h-10 font-semibold text-gray-400 border-black border" >
          <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent className='bg-white  '>
            {
                item?.options?.map((option , index) => (
                    <SelectItem key={index} value={option}>{option}</SelectItem>
                ))
            }
        </SelectContent>
      </Select>
    </div>
  );
}

export default Dropdown;
