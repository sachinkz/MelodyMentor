import Image from 'next/image'
import React from 'react'
import teacher1 from "public/teacher1.jpg"
import Button from '@/components/shared/Button/Button'
import Header from '@/components/instructor/Header'

const page = () => {
    return (
        <div className='flex flex-col gap-14 w-full h-full px-20 py-32'>
            <Header />
            <div className='w-full flex justify-between p-10 items-center rounded-xl bg-[#0e0e0e]'>
                <h1 className='font-bold'>Jump Into Course Creation</h1>
                <Button clsNames='p-3 font-extrabold' redirect='/instructor/courses'>Create Your Course</Button>
            </div>
            <h1 className='font-bold text-center capitalize'>we think these resources will be helpful.</h1>
            <div className='bg-[#0e0e0e] flex justify-around p-10 rounded-xl items-center'>
                <Image src={teacher1} width={150} alt='vectorimg' />
                <div className='w-[50%] flex flex-col gap-5'>
                    <h1 className='font-extrabold text-violet-300 text-2xl'>Create an Engaging Course</h1>
                    <p>Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting.</p>
                    <a className='bg-violet-400 w-fit px-2 py-1 rounded-xl font-bold hover:bg-violet-600' href="">Get Started</a>
                </div>
            </div>
            <div className='flex justify-between gap-5'>
                <div className='bg-[#0e0e0e] w-[50%] flex justify-around p-10 rounded-xl items-center'>
                    <Image src={teacher1} width={150} alt='vectorimg' />
                    <div className='w-[60%] flex flex-col gap-5'>
                        <h1 className='font-extrabold text-violet-300 text-2xl'>Get Started with Video</h1>
                        <p>Quality video lectures can set your course apart. Use our resources to learn the basics.</p>
                        <a className='bg-violet-400 w-fit px-2 py-1 rounded-xl font-bold hover:bg-violet-600' href="">Get Started</a>
                    </div>
                </div>
                <div className='bg-[#0e0e0e] w-[50%] flex justify-around p-10 rounded-xl items-center'>
                    <Image src={teacher1} width={150} alt='vectorimg' />
                    <div className='w-[60%] flex flex-col gap-5'>
                        <h1 className='font-extrabold text-violet-300 text-2xl'>Build Your Audience</h1>
                        <p>Set your course up for success by building your audience.</p>
                        <a className='bg-violet-400 w-fit px-2 py-1 rounded-xl font-bold hover:bg-violet-600' href="">Get Started</a>
                    </div>
                </div>
            </div>
            <div className='bg-[#0e0e0e] flex justify-around p-10 rounded-xl items-center'>
                <Image src={teacher1} width={150} alt='vectorimg' />
                <div className='w-[50%] flex flex-col gap-5'>
                    <h1 className='font-extrabold text-violet-300 text-2xl'>Join the New Instructor Challenge!</h1>
                    <p>Get exclusive tips and resources designed to help you launch your first course faster! Eligible instructors who publish their first course on time will receive a special bonus to celebrate. Start today!</p>
                    <a className='bg-violet-400 w-fit px-2 py-1 rounded-xl font-bold hover:bg-violet-600' href="">Get Started</a>
                </div>
            </div>
            <h1 className='font-bold text-center'>Have Questions?  <a href="" className='underline font-light'>Get help.</a></h1>
        </div>
    )
}

export default page