import React, { useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const TopRestaurant = () => {
    const [data, setData] = useState([])

    const fetchTopRestaurant = async () => {
        const responsse = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
    }

    useEffect = () =>{
        fetchTopRestaurant()
    }

  return (
    <div className="max-w-[1200px] mx-auto">
          <div className="flex my-3 items-center justify-between">
            <div className="text-[25px] font-bold">Top restaurant chains in Chitwan</div>
    
            <div className="flex">
              <div
               
                className="cursor-pointer flex justify-center items-center h-[30px] w-[30px] bg-[#e2e2e7] rounded-full mx-2"
              >
                <FaArrowLeft />
              </div>
              <div
                
                className="cursor-pointer flex justify-center items-center h-[30px] w-[30px] bg-[#e2e2e7] rounded-full mx-2"
              >
                <FaArrowRight />
              </div>
            </div>
          </div>
    </div>
      
  )
}

export default TopRestaurant
