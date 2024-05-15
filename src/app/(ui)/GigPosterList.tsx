import React from 'react'
import { posters as postersData } from './data'
import Image from 'next/image'

const GigPosterList = ({ posters }: { posters: typeof postersData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posters.map((poster, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <Image
            src={poster.image}
            alt={poster.title}
            className="w-full h-48 object-cover object-center"
            width={300}
            height={300}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{poster.title}</h2>
            <p className="text-gray-600">{poster.date}</p>
            <p className="text-gray-600">{poster.venue}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GigPosterList
