function Textarea({des, item , handleInputData}) {
  return (
    <div>
        <textarea 
        value={des}
        onChange={(e) => handleInputData(item.name, e.target.value)}
        name={item.name} placeholder={item.label} type={item.fieldType} required={item.required}
        className="border border-black p-2 mt-1 w-[100%] md:w-[202%] h-20 resize-y"></textarea>
    </div>
  )
}

export default Textarea