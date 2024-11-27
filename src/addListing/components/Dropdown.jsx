
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
function Dropdown({listing , item , handleInputData}) {
  return (
    <div>
      <Select 
      defaultValue={listing?.[item.name]}
      onValueChange={(value) => handleInputData(item.name, value)}  
      name={item.name} placeholder={item.label} type={item.fieldType} required={item.required}  >
        <SelectTrigger className="w-full rounded mt-1 h-10  border-black border text-black" >
          <SelectValue placeholder={item.label}/>
        </SelectTrigger>
        <SelectContent >
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
