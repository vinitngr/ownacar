/* eslint-disable no-unused-vars */
import React from 'react'
import Data from '../data/cars-data'
import { useNavigate } from 'react-router-dom'
function Category() {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col mt-44 items-center '>
        <div className='text-3xl font-bold googlehandfont mb-10'>Browse by Type</div>
        <div className=' grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 p-4'>
            {
                Data.Categories.map((Category , index) => (
                    <div
                    onClick={()=>navigate(`/search?category=${Category.name}`)}
                    className='size-28 md:size-28  border-2  rounded-xl flex flex-col items-center justify-center cursor-pointer hover:scale-110' key={index}>
                        <img src={Category.icon} alt={Category.name} className='w-[50px] h-[50px] '/>
                        <div className='text-center font-bold googlehandfont'>{Category.name}</div>
                    </div>
                ))
            }

            

        </div>

      </div>
  )
}

export default Category