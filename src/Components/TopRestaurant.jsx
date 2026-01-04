import React, { useState, useEffect, useRef } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import Card from './Card'

const TopRestaurant = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef()


  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Manishchaudhary83/Swigy-Clone/main/src/data/Restaurant.json"
      )
      const apiData = await response.json()
      setData(apiData.restaurants)
    } catch (error) {
      console.error("Error fetching restaurants:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTopRestaurant()
  }, [])

  
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4">

      {/* Header */}
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Chitwan
        </div>

        {/* Arrows */}
        <div className="flex">
          <div
            onClick={scrollLeft}
            className="cursor-pointer flex justify-center items-center h-[35px] w-[35px] bg-[#e2e2e7] rounded-full mx-2 hover:bg-gray-300 transition"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={scrollRight}
            className="cursor-pointer flex justify-center items-center h-[35px] w-[35px] bg-[#e2e2e7] rounded-full mx-2 hover:bg-gray-300 transition"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Cards container */}
      {loading ? (
        <p className="text-center text-gray-500">Loading restaurants...</p>
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {data.map((restaurant) => (
            <Card
              key={restaurant.id}
              image={restaurant.image}
              name={restaurant.name}
              rating={restaurant.rating}
              cuisine={restaurant.cuisine}
              deliveryTime={restaurant.deliveryTime}
              priceForTwo={restaurant.priceForTwo}
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default TopRestaurant
