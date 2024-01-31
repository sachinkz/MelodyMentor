import Image from 'next/image'
import React from 'react'
import offerImg from 'public/CustomLessonPlan.jpg'
import Navbar from '@/components/user/Navbar/Navbar'
import 'boxicons/css/boxicons.min.css'
import Button from '@/components/shared/Button/Button'


const page = () => {
  return (
    <div className='w-full flex flex-col text-center gap-10 items-center min-h-screen'>
        <Navbar onStartPage={false}/>
        <h3 className='bg-violet-300 rounded-3xl font-extrabold text-xl text-black py-1 mt-24 px-5'>special offer</h3>
        <h1 className='text-5xl font-bold'>Get A Custom Lesson Plan</h1>
        <h1 className='text-2xl font-thin'>Learn faster with step by step plans</h1>
        <Image src={offerImg} alt='offers'/>
        <p className='font-thin text-xl'>Let us guide you on this journey! Guitar Tricks instructor Dave Celentano will create a specialized plan with your interests and goals in mind. Get a detailed plan with all the lessons you need to improve on your skills so you can play confidently! On sale for a limited time only.</p>
        <ol className='md:text-left text-violet-300'>
            <li className='mb-3 text-xl'><i className='bx bx-radio-circle-marked'></i> Personalized learning catered to your needs</li>
            <li className='mb-3 text-xl'><i className='bx bx-radio-circle-marked'></i> Eliminate frustration with a plan that goes at your pace</li>
            <li className='mb-3 text-xl'><i className='bx bx-radio-circle-marked'></i> Regain your confidence and passion with playing</li>
            <li className='mb-3 text-xl'><i className='bx bx-radio-circle-marked'></i> Get better, faster results with your personal growth plan</li>
        </ol>

        <div className='w-full items-center gap-5 flex flex-col'>
        <hr className='w-[60%] max-md:w-full opacity-20' />
        <div className='flex justify-between w-[50%] max-md:w-full'>
            <h3 className=' text-xl font-bold'>Retail Price</h3>
            <h3 className=' text-xl font-bold'><i className='bx bx-rupee' ></i>5000</h3>
        </div>
        <hr className='w-[60%] max-md:w-full opacity-20' />
        <div className='flex justify-between w-[50%] max-md:w-full'>
            <h3 className=' text-xl font-bold'>Today's Discount</h3>
            <h3 className=' text-xl font-bold'>-<i className='bx bx-rupee' ></i><span>2500</span></h3>
        </div>
        <hr className='w-[60%] max-md:w-full opacity-20' />
        <div className='flex justify-between w-[50%] max-md:w-full'>
            <h3 className=' text-2xl text-green-500 font-extrabold '>Your Price</h3>
            <h3 className='text-2xl text-green-500 font-extrabold'><i className='bx bx-rupee' ></i>2500</h3>
        </div>
        <hr className='w-[60%] max-md:w-full opacity-20' />
        <Button clsNames='font-bold px-8 py-3 mb-10' redirect='/home'>Purchase Now</Button>
        </div>
    </div>
  )
}

export default page
