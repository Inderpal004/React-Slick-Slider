import React from 'react'

export default function Card({item}) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-xl m-auto py-6 px-2">
        <img className="w-full" src={item.img} alt="slider" style={{
                        height: '200px',
                        width: '200px',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        borderRadius: '50%',
                        display: 'block',
                        margin: 'auto'
                    }}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <p className="text-gray-700 text-base">
           {item.desc}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </>
  )
}
