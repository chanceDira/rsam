import React from 'react'

function CollegeParts() {
  return (
    <div className=' flex justify-center items-center w-full mt-40'>
        <div className=' grid grid-cols-1 md:grid-cols-3 w-3/5 gap-7'>
            <div className=' bg-[#02529B] rounded-lg'>
                <div className=' h-40'>
                <img src="a-8.jpg" alt="" className=' rounded-tr-lg rounded-tl-lg h-full w-full object-cover' />
                </div>
                <div className=' p-3 text-white'>
                    <div className=' font-bold my-2'>

                FUTURE STUDENTS' OFFICE
                    </div>
                    <div className=' text-xs font-light'>
                Thinking about attending RSAM? No matter who you are - a prospective student, a parent or supporter of a prospective student, or a high school counsellor, the Future Students’ Office can help you decide if RSAM is the right fit.
                    </div>
                </div>
            </div>
            <div className=' bg-[#02529B] rounded-lg'>
                <div className=' h-40'>
                <img src="artist_4.png" alt="" className=' rounded-tr-lg rounded-tl-lg h-full w-full object-cover' />
                </div>
                <div className=' p-3 text-white'>
                    <div className=' font-bold my-2'>
                    INFORMATION SESSIONS
                    </div>
                    <div className=' text-xs font-light'>
                    Want to learn more about a specific program? Our information sessions give you the answers to your burning questions on the program of your choice. You’ll also have the opportunity to meet directly with faculty who can give you a deeper look at what you’ll learn.
                          </div>
                </div>
            </div>
            <div className=' bg-[#02529B] rounded-lg'>
                <div className=' h-40'>
                <img src="a-7.jpg" alt="" className=' rounded-tr-lg rounded-tl-lg h-full w-full object-cover' />
                </div>
                <div className=' p-3 text-white'>
                    <div className=' font-bold my-2'>
                    CAMPUS TOURS
                    </div>
                    <div className=' text-xs font-light'>
                    Want to see what it’s like to attend RSAM College? Join us on a campus tour, led by actual RSAM students. It’s the best way to experience Douglas College for yourself and get a feel for student life.
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CollegeParts