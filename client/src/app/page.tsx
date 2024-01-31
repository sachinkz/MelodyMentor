
import Image from 'next/image'
import img from '../../public/heroImgMain.png'
import Navbar from '@/components/user/Navbar/Navbar'
import React, { useEffect, useState } from 'react'
import Button from '@/components/shared/Button/Button'
import Link from 'next/link'


export default function Home() {

  return (
    <React.Fragment>
      <Navbar onStartPage={true} />
      <main className="bg- overflow-hidden flex max-lg:flex-col mb-20  min-h-screen items-center justify-between pt-10 px-24 text-center">
        <div className=' max-lg:w-screen flex flex-col max-lg:items-center  gap-5  max-lg:p-[60px] max-lg:text-center text-left w-[50%] p-8'>
          <h3 className='text-lg text-violet-200 '>Online Music Teacher</h3>
          <h1 className='text-5xl text-purple-400 font-extrabold'>Learn Your Favourite <span className='text-violet-100'>Music</span>  Instrument</h1>
          <h3>With <span className='text-violet-400'>MelodyMentor</span> you can learn your favourite music instrument online.We offer live classes and also recorded complete courses</h3>

          <Button redirect='/auth/register' clsNames='px-5 font-extrabold py-3'>Signup Today</Button>
          <p className='mt-6'>already a user?<Link href='/auth/login' className='text-violet-400 cursor-pointer'> Login here</Link></p>
        </div>
        <div className='relative max-md:w-screen w-[50%] flex justify-center items-center'>
          <Image className='hover:opacity-100 p-5 cursor-pointer hover:animate-spin ease-in-out' src={img} alt='heroImg' width={600} height={600} />
        </div>
      </main>
      <div className='bg-[#0f0f0f] flex w-full justify-center pt-16 px-3 text-center'>
        <div className='flex flex-col gap-8 pb-20 items-center'>
          <h1 className=' text-5xl font-extrabold'>Unlock Full Access Now!</h1>
          <h3 className='text-[#c5c4c4] text-lg'>The <span className='font-bold text-violet-400'>Easy</span>,<span className='font-bold text-violet-400'>Fast </span>and <span className='font-bold text-violet-400'>Fun</span> way to learn guitar</h3>
          <div className='flex flex-col xl:pl-10 gap-5'>

            <hr className='opacity-20' />
            <div className='flex items-center justify-start gap-5 text-left '>
              <i className='text-2xl bx bx-video-plus'></i>
              <h1 className='font-bold text-violet-400 text-xl'>Weeky Videos</h1>
            </div>
            <hr className='opacity-20' />
            <div className='flex items-center justify-start gap-5 text-left '>
              <i className='text-2xl bx bx-coin-stack' ></i>
              <h1 className='font-bold text-violet-400 text-xl'>Step By Step Lessons</h1>
            </div>
            <hr className='opacity-20' />
            <div className='flex items-center justify-start gap-5 text-left '>
              <i className='text-2xl bx bx-music' ></i>
              <h1 className='font-bold text-violet-400 text-xl'>Hundreds Of Song Lessons</h1>
            </div>
            <hr className='opacity-20' />
            <div className='flex items-center justify-start gap-5 text-left '>
              <i className='text-2xl bx bx-play-circle'></i>
              <h1 className='font-bold text-violet-400 text-xl'>Live Classes</h1>
            </div>
            <hr className='opacity-20' />
            <div className='flex items-center justify-start gap-5 text-left '>
              <i className='text-2xl bx bx-user-voice' ></i>
              <h1 className='font-bold text-violet-400 text-xl'>Friendly Support</h1>
            </div>
            <hr className='opacity-20' />
          </div>
          <Button redirect='/auth/membership' clsNames='px-5 font-extrabold py-3'>CHECK OUT THE PRICING</Button>
          <div className='flex gap-2 bg-green-400 p-2 rounded-xl justify-between items-center'>
            <i className=' text-xl bx bx-wink-smile text-red-600' ></i>
            <h1 className='text-sm font-bold '>Verified By Sachin</h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}