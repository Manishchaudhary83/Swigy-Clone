import React from 'react'

const Card = ({ image, name, rating, cuisine, deliveryTime, priceForTwo }) => {
  return (
    <div className="w-[273px] flex-shrink-0">
      <div className="h-[182px] w-full rounded-[15px] overflow-hidden relative">
        <img className="w-full h-full object-cover" src={image} alt={name} />
        <div className="absolute inset-0 flex items-end p-2 text-[22px] font-bold text-white
                        bg-gradient-to-t from-black/70 to-transparent">
          {name}
        </div>
      </div>

      {/* Extra info below image */}
      <div className="mt-2 text-sm text-gray-700">
        <div>⭐ {rating}</div>
        <div>{cuisine.join(', ')}</div>
        <div>⏱ {deliveryTime}</div>
        <div>💰 {priceForTwo}</div>
      </div>
    </div>
  )
}

export default Card
