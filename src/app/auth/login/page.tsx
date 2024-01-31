'use client'
import Footer from '@/components/Footer/Footer'
import loginImg from "public/guitar1.jpg"
import 'boxicons/css/boxicons.min.css'
import Image from 'next/image'
import React from 'react'
import Navbar from '@/components/Navbar/Navbar'

const Login = () => {


  return (
    <React.Fragment>
    <div className='flex justify-around h-screen' >

      <div className='w-[60%] flex items-center justify-center h-full -ml-10 -z-10 max-lg:hidden relative '>
        <h1 className='absolute  top-auto left-auto bottom-auto right-auto text-center bg-violet-900 p-2  text-white font-extrabold w-[700px] space-x-4 text-6xl '>Play Your First Note On Guitar Today</h1>
        <Image className='opacity-60 h-full object-cover' src={loginImg} width={900} alt='login page image'/>
      </div>

      <div className='h-[600px] w-[40%] mt-10 flex flex-col items-center'>
        <h2 className='text-center text-2xl font-bold pb-3' >WELCOM BACK</h2>
        <p className='text-center pb-2'>Login and access your <span className='text-violet-400'> MelodyMentor</span></p>
        <hr className='mb-6 opacity-20 w-[300px]' />
      <div className='  flex flex-col items-center gap-10 border-2 rounded-xl mx-auto my-suto border-gray-600 w-[350px] p-8'>
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
          <button className='w-full p-4 cursor-pointer bg-violet-400 hover:bg-violet-300 border-none rounded-lg text-black font-bold'>Login</button>
          {/* <p className={styles.errMessage}>{err && "Something went wrong!"}</p> */}
        </form>   
        <span className='text-white'>- OR -</span>

        <button className='w-full p-4 cursor-pointer bg-violet-400 hover:bg-violet-300 border-none rounded-lg text-black font-bold'>
          LOGIN WITH GOOGLE
        </button>
        <a href="" className='text-white'>create an account</a>
      </div>
      </div>
    </div>
      <Footer/>
    </React.Fragment>
  )
}

export default Login
