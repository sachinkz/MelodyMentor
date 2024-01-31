import React from 'react'
import 'boxicons/css/boxicons.min.css'
import img1 from 'public/img-01.jpg'
import img2 from 'public/img-02.jpg'
import img3 from 'public/img-03.jpg'
import { newest, collections, recent } from '@/utils/DUMMY_DATAS'
import Navbar from '@/components/user/Navbar/Navbar'
import SIdeNavbar from '@/components/user/SideNavbar/SIdeNavbar'
import Image from 'next/image'
import HomePageRow from '@/components/user/HomePageRow/HomePageRow'
import Link from 'next/link'


const page = () => {
  return (
    <React.Fragment>
      <div className=' w-full m-auto min-h-screen object-contain flex justify-center pt-24'>

        <SIdeNavbar show={false} />

        <div className='w-full flex flex-col gap-10 bg-[#121212] text-xl m-2 rounded-lg p-6'>
          <div className='grid grid-flow-col gap-3  max-md:grid-rows-3'>
            <div className='m-auto relative cursor-pointer rounded-xl shadow-2xl  hover:shadow-[#313c5d] bg-[#454545]'>
              <Link href='/lesson/beginner'><Image loading='lazy' className=' rounded-xl opacity-70 hover:opacity-100' src={img1} alt='style 1' /></Link>
              <h1 className='absolute text-2xl left-3 bottom-3 font-extrabold'>BASICS FOR BEGINNERS</h1>
            </div>
            <div className='m-auto relative cursor-pointer rounded-xl shadow-xl hover:shadow-[#274042] bg-[#454545]'>
              <Link href='/lesson/advanced'><Image loading='lazy' className='  rounded-xl opacity-70 hover:opacity-100' src={img2} alt='style 1' /></Link>
              <h1 className='absolute text-2xl left-3 bottom-3 font-extrabold'>ADVANCED LESSONS</h1>
            </div>
            <div className='m-auto relative cursor-pointer rounded-xl shadow-2xl hover:shadow-[#6a3439] bg-[#454545]'>
              <Link href='/lesson/songs'><Image loading='lazy' className='  rounded-xl opacity-70 hover:opacity-100' src={img3} alt='style 1' /></Link>
              <h1 className='absolute text-2xl left-3 bottom-3 font-extrabold'> FAMOUS SONGS LIBRARY</h1>
            </div>
          </div>
          <HomePageRow heading={'RECENTLY WATCHED'} datas={recent} />
          <HomePageRow heading={'NEWEST LESSONS'} datas={newest} />
          <HomePageRow heading={'SONG COLLECTIONS'} datas={collections} />

        </div>
      </div>
    </React.Fragment >
  )
}

export default page