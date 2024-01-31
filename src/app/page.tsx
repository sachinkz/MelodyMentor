'use client'
import Image from 'next/image'
import img from '../../public/heroImgMain.png'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import React, { useState } from 'react'

export default function Home() {

  return (
    <React.Fragment>
      <Navbar/>
    <main className= "bg- overflow-hidden flex max-lg:flex-col min-h-screen items-center justify-between pt-10 px-24 text-center">
      <div className=' max-lg:w-screen   max-lg:p-[60px] max-lg:text-center text-left w-[50%] p-8'>
        <h3 className='text-lg text-violet-200 '>Online Music Teacher</h3>
        <h1 className='text-[50px] text-purple-400 font-extrabold'>Learn Your Favourite <span className='text-violet-300'>Music</span>  Instrument</h1>
        <h3>With <span className='text-violet-400'>MelodyMentor</span> you can learn your favourite music instrument online.We offer live classes and also recorded complete courses</h3>
        <button className=' bg-violet-600 mt-10 p-4 rounded-2xl font-extrabold hover:bg-violet-400'> SIgnup Today</button>
        <p className='mt-6'>already a user?<a className='text-violet-400 cursor-pointer'> Login here</a></p>
      </div>
      <div className='relative max-md:w-screen w-[50%] flex justify-center items-center'>
       <Image className='hover:opacity-100 p-5 cursor-pointer hover:animate-spin' src={img} alt='heroImg' width={600} height={600} />
      </div>
    </main>
      <Footer/>
    </React.Fragment>
  )
}