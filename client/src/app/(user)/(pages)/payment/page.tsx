import Navbar from '@/components/user/Navbar/Navbar'
import React from 'react'
import 'boxicons/css/boxicons.min.css'


const page = () => {
  return (
    <React.Fragment>
        <Navbar onStartPage={false}/>
        <div className='flex justify-center w-full'>
        <div className='flex flex-col items-center gap-3 w-[60%] max-lg:w-[80%] max-md:w-[100%] bg-[#0f0f0f] px-20 max-md:px-5 py-10 mt-24 mb-10'>
        <h2 className='font-extrabold text-3xl mb-5'>Order Summary</h2>
            <hr className='w-full opacity-10'/>
            <h4 className='font-thin'>CUSTOM LESSON PLAN</h4>
            <hr className='w-full opacity-10'/>
            <div className='w-full flex items-center justify-between'>
                <h3 className='font-bold text-xl text-violet-300'>Price</h3>
                <h3 className='font-bold text-xl text-violet-300'><i className='bx bx-rupee' ></i>2500</h3>
            </div>
            <hr className='w-full opacity-10'/>
          <h1 className='font-extrabold text-3xl mt-10'>Contact Info</h1>
            <hr className='w-full opacity-10 mb-10'/>
          <form action="" className='w-full items-center flex flex-col gap-10'>
            <input placeholder='First name' required className='w-full h-10 rounded-lg bg-transparent border-2 border-[#343333] pl-5' type="text" />
            <input placeholder='Last name' className='w-full h-10 rounded-lg bg-transparent border-2 border-[#343333] pl-5' type="text" />
            <button type='submit' className='bg-violet-300 text-black font-bold px-5 py-2 rounded-xl w-[70%]'>Proceed to Pay</button>
          </form>
        </div>
        </div>
    </React.Fragment>
  )
}

export default page