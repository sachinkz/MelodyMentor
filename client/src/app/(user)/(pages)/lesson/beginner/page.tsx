import React from 'react'
import Navbar from '@/components/user/Navbar/Navbar'
import SIdeNavbar from '@/components/user/SideNavbar/SIdeNavbar'
import Image from 'next/image'
import img1 from 'public/img-04.jpg'
import img2 from 'public/img-05.jpg'
import img3 from 'public/img-06.jpg'
import levels from 'public/leveldesing.png'

const page = () => {
  return (
    <React.Fragment>
        <Navbar onStartPage={false}/>
      <div className=' w-full m-auto min-h-screen object-contain flex justify-center pt-24'>
        
          <SIdeNavbar show={false} />

        <div className='w-full flex flex-col gap-10 bg-[#121212] items-center text-xl m-2 rounded-lg p-6'>
            <div className='flex gap-5 max-md:flex-col'>
              <div className='relative border-2 border-[#121212] hover:border-white rounded-lg opacity-70 hover:opacity-100 cursor-pointer'>
                <Image className='rounded-lg' src={img1} alt='bg'/>
                <p className='absolute text-sm opacity-70  top-1 left-2'>tutorials</p>
                <h2 className='absolute bottom-2 left-2 font-bold'>BEGINNER FUNDAMENTALS</h2>
              </div>
              <div className='relative border-2 border-[#121212] hover:border-white rounded-lg opacity-70 hover:opacity-100 cursor-pointer'>
                <Image className='rounded-lg' src={img2} alt='bg'/>
                <p className='absolute text-sm opacity-70  top-1 left-2'>tutorials</p>
                <h2 className='absolute bottom-2 left-2 font-bold'>TUNING AND MAINTAINANCE</h2>
              </div>
              <div className='relative border-2 border-[#121212] hover:border-white rounded-lg opacity-70 hover:opacity-100 cursor-pointer'>
                <Image className='rounded-lg' src={img3} alt='bg'/>
                <p className='absolute text-sm opacity-70  top-1 left-2'>songs</p>
                <h2 className='absolute bottom-2 left-2 font-bold'>EASY SONGS FOR BEGINNERS</h2>
              </div>
            </div>
          <p className='mt-10 text-center opacity-70 text-lg'>Welcome to the beginner guitar lessons section of MelodyMentor ®. Here is where you will find lessons for absolute beginners that are brand new to guitar, as well as some material for brushing up on the fundamentals, if you have some familiarity but are still at the beginner level.</p>
          <p className=' text-center opacity-70 text-lg'>Our Core Learning System is a great place to start for everyone. In this extensive course, you will begin out learning basics like how to hold a guitar, how to hold a guitar pick, how to play simple guitar chords, and how to strum the guitar. To keep things fun, you’ll learn by playing simple songs!</p>
            <h2 className='font-bold mt-10'>Zero To Hero Roadmap</h2>
            <div>
              <Image  src={levels} alt='levels'/>
            </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default page