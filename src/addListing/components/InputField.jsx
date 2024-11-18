
function inputField({ item, handleInputData }) {
  return (
    <div>
        <input
        autoComplete="off"
          onChange={(e) => handleInputData(item.name, e.target.value)}
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