/* eslint-disable react/prop-types */

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
function Dropdown({item}) {
    console.log(item)
  return (
    <div>
      <Select name={item.name} placeholder={item.label} type={item.fieldType} required={item.required}  >
        <SelectTrigger className="w-full rounded mt-1 h-10 " >
          <SelectValue placeholder={item.label} />
        </SelectTrigger>
        <SelectContent className='bg-white '>
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
