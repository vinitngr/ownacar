
function inputField({listing ,  item, handleInputData }) {
  
  return (
    <div>
        <input
          defaultValue={listing?.[item.name]}
          autoComplete="off"
          onChange={(e) => {
            const value = e.target.value === "" ? null : e.target.value;
            handleInputData(item.name, value);
          }}
          
          name={item.name}
          placeholder={item.label}
          type={item.fieldType}
          required={item.required}
          className="rounded ring-1 ring-black focus:outline-blue-600 w-full p-2 mt-1"
        />
    </div>
  );
}

export default inputField