'use client'
import RegisterImg from "public/guitar2.jpg"
import 'boxicons/css/boxicons.min.css'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Button from "@/components/shared/Button/Button"

const Register = () => {


  return (
    <div className='flex justify-around min-h-screen' >

      <div className='w-[60%] min-h-screen flex items-center justify-center h-full -ml-10 -z-10 max-lg:hidden '>
        <h1 className='absolute top-auto left-auto bottom-auto right-auto text-center  p-2  text-white font-extrabold z-10 max-w-[600px] space-x-4 text-5xl leading-[60px] '>Play Your First Note On <span className='bg-violet-500 px-2'>Guitar</span> Today</h1>
        <Image className='opacity-60 h-screen object-cover' src={RegisterImg} width={900} alt='login page image' />
      </div>

      <div className='h-[600px] w-[40%] max-lg:w-full min-h-screen  flex flex-col items-center justify-center'>
        <div className='  flex flex-col items-center gap-6 border-2 rounded-xl mx-auto my-suto border-gray-600 w-[350px] max-[400px]:w-[280px] max-[400px]:p-4 p-8'>
          <h1 className='text-white font-bold'>Create an Account</h1>
          <form className='flex flex-col gap-8 items-center w-full'>
            <input
              type="text"
              placeholder="Email Address"
              required
              className='p-2 w-full bg-transparent border-2 outline-none text-white font-bold text-lg border-white rounded-lg'
            />

            <input
              type="Password"
              placeholder="Password"
              required
              className='p-2 w-full bg-transparent border-2 outline-none text-white font-bold text-lg border-white rounded-lg'
            />
            <input
              type="Password"
              placeholder="Confirm Password"
              required
              className='p-2 w-full bg-transparent border-2 outline-none text-white font-bold text-lg border-white rounded-lg'
            />
          <Button clsNames='w-full px-20 py-3 font-bold uppercase' redirect=''>Signup</Button>
            {/* <p className={styles.errMessage}>{err && "Something went wrong!"}</p> */}
          </form>
          <span className='text-white'>- OR -</span>

          <button className='w-full p-4 flex items-center justify-center gap-2 cursor-pointer bg-red-400 hover:bg-red-300 border-none rounded-lg text-black font-bold'>
            <i className='bx bxl-google text-xl'></i>
            SIGNUP WITH GOOGLE
          </button>
          <button className='w-full p-4 flex items-center justify-center gap-2 cursor-pointer bg-red-400 hover:bg-red-300 border-none rounded-lg text-black font-bold'>
            <i className='bx bxs-envelope text-xl' ></i>
            SIGNUP WITH EMAIL
          </button>
          <Link href='/auth/login' className='text-white'>Login?</Link>
        </div>
      </div>
    </div>
  )
}

export default Register
