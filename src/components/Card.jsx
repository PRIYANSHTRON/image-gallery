import React from 'react'

function Card({ img_url,views,downloads,likes,user }) {
    console.log(img_url)
  return (
      <div className='max-w-auto rounded overflow-hidden shadow-md bg-white min-h-[350px]'>
          <img src={img_url} alt="" className='hover:scale-125 transition'/>
          <div className='text-purple-500 font-medium px-4 py-2'>
              Photo by {user}
          </div>
          <div className="px-4 py-2 text-[12px] font-bold">
              <ul>
                  <li>Likes : {likes }</li>
                  <li>views : {views}</li>
                  <li>downloads : {downloads }</li>
              </ul>
          </div>
          <div className='px-4 py-2 pb-3'>
                <span className='p-2 bg-green-100 text-green-800 font-semibold text-[10px] rounded-full mx-2'>#tag1</span>
                <span className='p-2 bg-green-100 text-green-800 font-semibold text-[10px] rounded-full mx-2'>#tag1</span>
                <span className='p-2 bg-green-100 text-green-800 font-semibold text-[10px] rounded-full mx-2'>#tag1</span>
          </div>
    </div>
  )
}

export default Card