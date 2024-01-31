import React from 'react'
import 'boxicons/css/boxicons.min.css'
import img1 from 'public/img-01.jpg'
import img2 from 'public/img-02.jpg'
import img3 from 'public/img-03.jpg'
import { leftImages ,newest ,collections,recent} from '@/utils/DUMMY_DATAS'
import Navbar from '@/components/Navbar/Navbar'
import SIdeNavbar from '@/components/SideNavbar/SIdeNavbar'
import Image from 'next/image'
import HomePageRow from '@/components/HomePageRow/HomePageRow'


const page = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className='w-full m-auto min-h-screen flex justify-center pt-24 bg-[#202020]'>
        <div className='w-[350px] flex flex-col p-2 max-lg:hidden'>
          <SIdeNavbar />
          <div className='flex flex-col gap-10 mt-5'>
            <div>
              <Image src={leftImages[0]} width={300} alt='lessons'/>
            </div>
            <div>
              <Image src={leftImages[1]} width={300} alt='lessons'/>
            </div>
            <div>
              <Image src={leftImages[2]} width={300} alt='lessons'/>
            </div>
            <div>
              <Image src={leftImages[3]} width={300} alt='lessons'/>
            </div>
            <div>
              <Image src={leftImages[4]} width={300} alt='lessons'/>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-10 bg-[#303030] text-xl m-2 rounded-lg p-6'>
          <div className='grid grid-flow-col gap-3  max-md:grid-rows-3'>
            <div className='m-auto  relative cursor-pointer'>
              <Image className='shadow-2xl  shadow-black rounded-xl opacity-70 hover:opacity-100' src={img1} alt='style 1' />
              <h1 className='absolute text-2xl left-3 bottom-3 font-extrabold'>BEGGINNER LESSONS</h1>
            </div>
            <div className='m-auto relative cursor-pointer'>
              <Image className='shadow-2xl shadow-black  rounded-xl opacity-70 hover:opacity-100' src={img2} alt='style 1' />
              <h1 className='absolute text-2xl left-3 bottom-3 font-extrabold'>ADVANCED LESSONS</h1>
            </div>
            <div className='m-auto relative cursor-pointer'>
              <Image className='shadow-2xl shadow-black  rounded-xl opacity-70 hover:opacity-100' src={img3} alt='style 1' />
              <h1 className='absolute text-2xl left-3 bottom-3 font-extrabold'> FAMOUS SONGS LIBRARY</h1>
            </div>

          </div>
          <HomePageRow datas={recent}/>
          <HomePageRow datas={newest}/>
          <HomePageRow datas={collections}/>
        </div>
      </div>
    </React.Fragment >
  )
}

export default page