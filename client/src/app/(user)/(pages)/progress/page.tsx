import Navbar from '@/components/user/Navbar/Navbar'
import SIdeNavbar from '@/components/user/SideNavbar/SIdeNavbar'
import Image from 'next/image'
import React from 'react'
import logo1 from 'public/guitar1.jpg'
import logo2 from 'public/mic1.jpg'
import bgImg from 'public/card-bg-01.png'
import HomePageRow from '@/components/user/HomePageRow/HomePageRow'
import { recent } from '@/utils/DUMMY_DATAS'

const page = () => {
    return (
        <div className='w-full m-auto min-h-screen object-contain flex justify-center mt-24'>
            <Navbar onStartPage={false}/>
            <SIdeNavbar show/>
            <div className='w-full flex flex-col max-md:gap-0 gap-10 bg-[#121212] text-xl m-2 rounded-lg p-6'>
                <div className='w-full p-3 relative object-cover flex justify-center items-center '>
                    <h1 className='font-extrabold absolute '>MY PROGRESS</h1>
                    <Image className='object-cover w-full max-h-12' src={bgImg} width={200} alt='logohere' />
                </div>
                <div className='w-full flex justify-around mt-5 mb-10'>
                    <div className='flex flex-col items-center gap-4'>
                        <Image className='border-2 rounded-[50%] max-md:w-[100px]' src={logo1} width={200} alt='logohere' />
                        <h5 className='font-thin text-lg'>TUTORIALS</h5>
                        <div className='relative flex items-center justify-start w-full bg-black h-6 border rounded p-[2px]'>
                            <p className='absolute text-xs left-[22%] max-md:text-[8px] text-[#9f9e9e]'>10% completed</p>
                            <div className='w-[10%] h-full bg-green-400'>
                            </div>
                        </div>
                        <p className='font-thin text-sm max-md:text-[12px]'>2 of 56 lessons watched</p>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <Image className='border-2 rounded-[50%] max-md:w-[100px]' src={logo2} width={200} alt='logohere' />
                        <h5 className='font-thin text-lg'>SONGS</h5>
                        <div className='relative flex items-center justify-start w-full bg-black h-6 border rounded p-[2px]'>
                            <p className='absolute text-xs left-[22%] text-[#9f9e9e] max-md:text-[8px]'>10% completed</p>
                            <div className='w-[10%] h-full bg-green-400'>
                            </div>
                        </div>
                        <p className='font-thin text-sm max-md:text-[12px]'>2 of 60 songs learned</p>
                    </div>
                </div>
                <HomePageRow heading={'Completed Lessons'} datas={recent} />
                <HomePageRow heading={'Completed Songs'} datas={recent} />
            </div>
        </div>
    )
}

export default page