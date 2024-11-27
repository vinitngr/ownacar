
function CheckBox({item, features , handleFeatures}) {
  return (
    <div className="p-1 flex border ">
        <label className="flex items-center flex-row-reverse">
            {item.label}
            <input
            defaultChecked={features?.[item.name] || false}
            onChange={(e) => handleFeatures(item.name, e.target.checked)}
            className="m-2 size-4"
            name={item.name}
            type={item.fieldType}
            />
        </label>
    </div>
  )
}

export default CheckBox