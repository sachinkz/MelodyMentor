'use client'
import Footer from '@/components/Footer/Footer'
import RegisterImg from "public/guitar2.jpg"
import 'boxicons/css/boxicons.min.css'
import Image from 'next/image'
import React from 'react'

const Register = () => {


  return (
    <React.Fragment>
    <div className='flex justify-around h-screen' >

      <div className='w-[60%] flex items-center justify-center h-full -ml-10 -z-10 max-lg:hidden '>
        <Image className='opacity-60 h-full object-cover' src={RegisterImg} width={900} alt='login page image'/>
      </div>

      <div className='h-[600px] w-[40%] mt-10 flex flex-col items-center'>
      <div className='  flex flex-col items-center gap-6 border-2 rounded-xl mx-auto my-suto border-gray-600 w-[350px] p-8'>
        <h1 className='text-white font-bold'>Create an Account</h1>
        <form className='flex flex-col gap-8 items-center w-full'>
          <input
            type="text"
            placeholder="Email Address"
            required
            className='p-4 w-full bg-transparent border-2 outline-none text-white font-bold text-lg border-white rounded-lg'
          />

          <input
            type="Password"
            placeholder="Password"
            required
            className='p-4 w-full bg-transparent border-2 outline-none text-white font-bold text-lg border-white rounded-lg'
          />
          <input
            type="Password"
            placeholder="Confirm Password"
            required
            className='p-4 w-full bg-transparent border-2 outline-none text-white font-bold text-lg border-white rounded-lg'
          />
          <button className='w-full p-4 cursor-pointer bg-violet-400 hover:bg-violet-300 border-none rounded-lg text-black font-bold'>SIgnup</button>
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
        <a href="" className='text-white'>Login?</a>
      </div>
      </div>
    </div>
      <Footer/>
    </React.Fragment>
  )
}

export default Register
