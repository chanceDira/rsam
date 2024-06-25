import React from 'react'

const SectionSix = () => {
  return (
    <div
    className=' min-h-screen  w-full flex justify-center items-center bg-[#02529B]'>
    <div className=' flex flex-col gap-10 md:flex-row items-center justify-between w-4/5 b'>


    <div className=' w-1/2 flex flex-col gap-4 text-white'>
    <span className=' text-[#F0E12F] font-bold text-4xl'>
    Explore Summer Creativity
    </span>
    <span className=' font-light'>
    Our summer programs offer an exciting array of courses in music, theater, dance, production, songwriting, opera, music business, and more. Designed for students in middle school, high school, college, and beyond, these programs provide a unique opportunity to develop skills and passion in a supportive environment. Expert instructors guide students through immersive, hands-on experiences, ensuring a summer of growth and inspiration.
    </span>
    </div>
    <div className=' w-1/2'>
        <img src="Nyundo-Music.jpg" alt="" className='h-full w-full rounded-md object-cover' />
    </div>
    </div>
    </div>
  )
}

export default SectionSix