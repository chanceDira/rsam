import React from 'react'

const SectionSeven = () => {
  return (
    <div className=' flex  flex-col justify-center items-center min-h-screen w-full '>
        <div className=' text-[#02529B] text-3xl font-bold mb-10 mt-10'>
        A premier education. a community that cares.
        </div>
        <div className=' grid grid-cols-1 gap-8 md:grid-cols-3 w-4/5 items-center justify-between'>
            <div>
                <div className=' h-[400px] bg-red-500'>
                    <img src="here.jpg" alt="" className=' h-full w-full object-cover'  />
                </div>
                <div className=' text-[#02529B] font-bold text-3xl my-4'>
                Learn
                </div>
                <div className=' font-light text-sm'>
                Our Rwanda school offers degree programs taught by our expert faculty, available at our main campus and through online courses, along with music education programs at various global locations.
                </div>
                <div className='text-[#F0E12F] mt-4 font-bold text-sm underline '>
                    Learn more
                </div>
            </div>
            <div>
                <div className=' h-[400px] bg-red-500'>
                    <img src="stage.png" alt="" className=' h-full w-full object-cover'  />
                </div>
                <div className=' text-[#02529B] font-bold text-3xl my-4'>
                Create
                </div>
                <div className=' font-light text-sm'>
                We believe in the power of arts education to express our shared humanity, connect across differences, and create positive change in the world.
                </div>
                <div className='text-[#F0E12F] mt-4 font-bold text-sm underline '>
                    Learn more
                </div>
            </div>
            <div>
                <div className=' h-[400px] bg-red-500'>
                    <img src="a-9.png" alt="" className=' h-full w-full object-cover'  />
                </div>
                <div className=' text-[#02529B] font-bold text-3xl my-4'>
                Thrive
                </div>
                <div className=' font-light text-sm'>
                Our Rwanda school is dedicated to student success and affordability. We focus on comprehensive career preparation.
                </div>
                <div className='text-[#F0E12F] mt-4 font-bold text-sm underline '>
                    Learn more
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionSeven