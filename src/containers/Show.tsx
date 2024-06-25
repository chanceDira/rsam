import React from 'react'

const Show = () => {
  return (
    <div
    id="spirits"
    className=' min-h-screen flex flex-col items-center w-full'>

      <div className=' text-[#02529B] text-2xl font-bold mb-8'>
      Music Is An Agreeable Harmony For The Honor Of God And The Permissible Delights Of The Soul.
      </div>
      
      <div className=' flex flex-row gap-8 h-70 w-4/5'>
        <div className=' relative bg-white w-2/5 rounded-md'>
          <img src="artist_1.png" alt="" className='h-full w-full rounded-md object-cover' />
          <div className=' text-white text-md flex font-light justify-center items-center absolute bg-gradient-to-t from-[#02529B] to-[#40414500]  h-full w-full rounded-md top-0 '>
           <div className=' absolute bottom-4 text-justify w-4/5'>

           we have been committed to providing top-quality education in music, art, and the creative arts.
           </div>
          </div>
        </div>
        <div className=' relative bg-white w-3/5  rounded-md  '>
          <img src="artist_5.png" alt="" className=' h-full w-full rounded-md object-cover ' />
          <div className=' text-white text-md flex font-light justify-center items-center absolute bg-gradient-to-t from-[#02529B] to-[#40414500]  h-full w-full rounded-md top-0 '>
           <div className=' absolute bottom-4 text-justify w-4/5'>

           we have been committed to providing top-quality education in music, art, and the creative arts.
           </div>
          </div>
        </div>
      </div>

      <div className=' flex flex-row gap-8 h-70 w-4/5 mt-4'>
        <div className=' relative bg-white w-3/5  rounded-md  '>
          <img src="artist_4.png" alt="" className=' h-full w-full rounded-md object-cover ' />
          <div className=' text-white text-md flex font-light justify-center items-center absolute bg-gradient-to-t from-[#02529B] to-[#40414500]  h-full w-full rounded-md top-0 '>
           <div className=' absolute bottom-4 text-justify w-4/5'>

           we have been committed to providing top-quality education in music, art, and the creative arts.
           </div>
          </div>
        </div>
        <div className=' relative bg-white w-2/5 rounded-md'>
          <img src="artist_2.png" alt="" className='h-full w-full rounded-md object-cover' />
          <div className=' text-white text-md flex font-light justify-center items-center absolute bg-gradient-to-t from-[#02529B] to-[#40414500]  h-full w-full rounded-md top-0 '>
           <div className=' absolute bottom-4 text-justify w-4/5'>

           we have been committed to providing top-quality education in music, art, and the creative arts.
           </div>
          </div>
        </div>
      </div>
      
      </div>
  )
}

export default Show