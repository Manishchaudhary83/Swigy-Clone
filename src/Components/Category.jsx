import React, { useEffect, useState, useRef } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Category = () => {
  const [categories, setCategories] = useState([])
  const scrollRef = useRef(null)

  const fetchCategory = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
    );
    const data = await response.json();
    setCategories(data.meals); 
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  const prevSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>

        <div className="flex">
          <div
            onClick={prevSlide}
            className="cursor-pointer flex justify-center items-center h-[30px] w-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="cursor-pointer flex justify-center items-center h-[30px] w-[30px] bg-[#e2e2e7] rounded-full mx-2"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide"
      >
        {categories.map((meal) => (
          <div key={meal.idMeal} className="min-w-[150px]">
            <img
              src={meal.strMealThumb}   
              alt={meal.strMeal}
              className="w-full h-[120px] object-cover rounded-lg"
            />
            <p className="text-center mt-2 mb-3 font-semibold">
              {meal.strMeal}
            </p>
          </div>
        ))}
      </div>
      <hr className='my-4 border-0.5'/>
    </div>
  )
}

export default Category;
