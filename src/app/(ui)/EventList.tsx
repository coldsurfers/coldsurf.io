import React from 'react'
import { posters as postersData } from './data'
import Image from 'next/image'
import Link from 'next/link'

const EventList = ({ posters }: { posters: typeof postersData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:mx-10 gap-4">
      {posters.map((poster, index) => (
        <Link
          key={index}
          className="bg-white dark:bg-slate-600 rounded-lg shadow-md overflow-hidden"
          href={`/concert/${index}`}
        >
          <Image
            src={poster.image}
            alt={poster.title}
            className="w-full h-48 object-cover object-center"
            width={300}
            height={300}
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold dark:text-white">
              {poster.title}
            </h2>
            <p className="text-gray-600 dark:text-white">{poster.date}</p>
            <p className="text-gray-600 dark:text-white">{poster.venue}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default EventList
