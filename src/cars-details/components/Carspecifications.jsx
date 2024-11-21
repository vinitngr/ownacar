import data from '../../data/cars-data'
function Cardetails({ details }) {

  return (
    <>
      <div className="border-2 rounded-lg p-6 my-3">
        <h2 className="font-semibold text-xl">Car Details</h2>
        {
          data.carSpecifications.map((s , index)=>(
            <div key={index} className='flex justify-between'>
              <div className='font-normal my-2'>{s.name}</div>
              <div className='font-normal my-2'>{details[s.name]}</div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Cardetails;
