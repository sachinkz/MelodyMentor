import Image from 'next/image'
import React from 'react'
import bgImage from 'public/loginpageImg.png'
import plan2 from 'public/card-bg-01.png'
import plan1 from 'public/card-bg-02.png'
import 'boxicons/css/boxicons.min.css'

const page = () => {
    return (
        <div className='-mx-5 w-full min-h-screen flex relative justify-end  bg-gradient-to-l from-[30%] from-black to-[#01010100] items-center max-lg:justify-center '>
            <Image className='absolute object-cover min-h-full top-0 left-0 -z-10 w-[70%] max-xl:w-full' src={bgImage} width={600} alt='background cover' />
            <div className='flex flex-col gap-7  w-[50%] max-xl:w-[65%] max-lg:w-full max-lg:items-center max-lg:text-center ml-5 mt-5'>
                <h4 className='text-xl font-thin'>ALMOST DONE,</h4>
                <h1 className='text-6xl font-extrabold max-md:text-4xl '>CHOOSE YOUR <span className='text-violet-400'>MEMBERSHIP</span> </h1>
                <p className=''>most people choose <span className='font-bold'>FULL ACCESS.</span> Try it for <span>60 days risk-free!</span></p>
                <div className='flex gap-8 mt-10 max-md:flex-col' >
                    <div className='bg-[#1e1d1df3] rounded-lg h-full min-w-[300px]'>
                        <div className='relative flex justify-center flex-col gap-10'>
                            <Image src={plan1} alt='plan bg' />
                            <div className='absolute'>
                                <h5 className='ml-5 '>100% FREE</h5>
                                <h2 className='ml-5 font-extrabold text-2xl'>Basic Access</h2>
                            </div>
                        </div>
                        <div className='p-5 flex flex-col gap-3'>

                            <div className='flex gap-3 items-center'>
                                <i className='bx bx-user text-xl'></i>
                                <h3>Limited Free Lessons</h3>
                            </div>
                            <hr className='opacity-20 ml-7' />
                            <div className='flex gap-3 items-center'>
                                <i className='bx bx-tv text-xl' ></i>
                                <h3>No Access To Song Library</h3>
                            </div>
                            <hr className='opacity-20 ml-7' />
                            <div className='flex gap-3 items-center'>
                                <i className='bx bx-dollar-circle text-xl' ></i>
                                <h3>Basic Forum Access</h3>
                            </div>
                            <hr className='opacity-20 ml-7' />
                            <button className='hover:bg-white hover:text-black w-full border-2 h-10 border-[#6f6f6f] font-bold mt-5'>GET BASIC ACCESS</button>

                        </div>
                    </div>
                    <div className='bg-[#1e1d1df3] rounded-lg h-full min-w-[300px]'>
                        <div className='relative flex justify-center flex-col gap-10'>
                            <Image src={plan2} alt='plan bg' />
                            <div className='absolute'>
                                <h5 className='ml-5 '>100% FREE</h5>
                                <h2 className='ml-5 font-extrabold text-2xl'>Full Access</h2>
                            </div>
                        </div>
                        <div className='p-5 flex flex-col gap-3'>

                            <div className='flex gap-3 items-center'>
                                <i className='text-xl bx bx-user'></i>
                                <h3><span className='font-bold text-violet-300'>Get </span>Instructor Feedback</h3>
                            </div>
                            <hr className='opacity-20 ml-7' />
                            <div className='flex gap-3 items-center'>
                                <i className='text-xl bx bx-tv' ></i>
                                <h3><span className='font-bold text-violet-300'>Unlock </span>Core Learning</h3>
                            </div>
                            <hr className='opacity-20 ml-7' />
                            <div className='flex gap-3 items-center'>
                                <i className='text-xl bx bx-dollar-circle' ></i>
                                <h3><span className='font-bold text-violet-300'>60 Days</span> Risk Free</h3>
                            </div>
                            <hr className='opacity-20 ml-7' />
                            <div className='flex gap-3 items-center'>
                                <i className='text-xl bx bx-music'></i>
                                <h3><span className='font-bold text-violet-300'>Hundreds </span>of song lessons</h3>
                            </div>
                            <hr className='opacity-20 ml-7' />
                            <button className='w-full border-2 h-10 border-black font-bold bg-violet-500 mt-5'>GET FULL ACCESS</button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default page