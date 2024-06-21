import React from 'react'

const Show = () => {
  return (
    <div className=' min-h-screen flex flex-col items-center w-full'>

      <div className=' text-[#02529B] text-2xl font-bold mb-8'>
      Music Is An Agreeable Harmony For The Honor Of God And The Permissible Delights Of The Soul."
      </div>
      
      <div className=' flex flex-row gap-8 h-70 w-4/5'>
        <div className=' bg-white w-2/5 p-2 rounded-md'>
          <img src="stage.png" alt="" className='h-full w-full rounded-md object-cover' />
        </div>
        <div className=' bg-white w-3/5  p-2 rounded-md  '>
          <img src="stage.png" alt="" className=' h-full w-full rounded-md object-cover ' />
        </div>
      </div>

      <div className=' flex flex-row gap-8 h-70 w-4/5 mt-4'>
        <div className=' bg-white w-3/5  p-2 rounded-md  '>
          <img src="stage.png" alt="" className=' h-full w-full rounded-md object-cover ' />
        </div>
        <div className=' bg-white w-2/5 p-2 rounded-md'>
          <img src="stage.png" alt="" className='h-full w-full rounded-md object-cover' />
        </div>
      </div>
      
      </div>
  )
}

export default Show