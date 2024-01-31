import HomePageRow from '@/components/user/HomePageRow/HomePageRow'
import Navbar from '@/components/user/Navbar/Navbar'
import SideNavbar from '@/components/user/SideNavbar/SIdeNavbar'
import React from 'react'
import { instructors } from '@/utils/DUMMY_DATAS'
import Image from 'next/image'
import Button from '@/components/shared/Button/Button'

const page = () => {
  return (
    <React.Fragment>
      <Navbar onStartPage={false}/>
      <div className='bg-[#131313] py-5 mt-24'>
      <h1 className='text-center font-extrabold text-3xl '>Book a Live session </h1>
      <h3 className='text-center font-bold text-xl text-violet-300 mt-2'>Get <span className='font-extrabold text-green-400'>40%</span> off today !</h3>
      <p className='text-center mt-5 text-lg mx-20 max-md:mx-10 max-sm:mx-2 '>Book a live session today and clear your doubts with tthe help of the greatest guitar players from around the globe</p>
      <p className='text-center mt-5 text-lg mx-20 max-md:mx-10 max-sm:mx-2'>You may select a one-time lesson or recurring lessons if you want regular check-ins with our instructors. You can schedule lessons at your convenience and select either 30 minute or 60 minute lesson appointments.</p>
      <p className='text-center mt-5 text-lg mx-20 max-md:mx-10 max-sm:mx-2'>In your lesson, instructors are ready to offer advice and guidance to help you make the most progress. We're here to help you get un-stuck</p>
      </div>

      <h3 className='text-center font-bold text-2xl mt-10 underline'>Select an Artist</h3>
        <div className='w-full grid grid-flow-row grid-rows-3 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1 grid-cols-4 max-lg:grid-cols-3 gap-10  bg-[#121212] m-2 mt-10 rounded-lg p-6'>
          {instructors.map(tutor => (
            <div key={tutor.name} className='flex flex-col gap-5 items-center justify-evenly p-5 bg-[#181818] rounded-lg'>
              <h1 className='text-xl font-extrabold capitalize text-violet-400'>{tutor.name}</h1>
              <Image src={tutor.image} alt='instructor' width={200} />
              <Button redirect='/home' clsNames='font-bold px-2 py-2'>Book Live Session</Button>
            </div>
          ))}
        </div>
    </React.Fragment>
  )
}

export default page