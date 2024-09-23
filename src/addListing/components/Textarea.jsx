/* eslint-disable react/prop-types */


function Textarea({item}) {
  return (
    <div>
        <textarea name={item.name} placeholder={item.label} type={item.fieldType} required={item.required}
        className="border border-black p-2 mt-1 w-[202%] h-20  rounded-xl"></textarea>
    </div>
  )
}

export default Textarea