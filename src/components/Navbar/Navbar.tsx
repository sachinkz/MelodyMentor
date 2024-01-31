'use client'
import 'boxicons/css/boxicons.min.css';
import Image from 'next/image';
import logo from 'public/logo.png'
import { useState } from 'react';
import Sidedrawer from '../SideDrawer/Sidedrawer';

const Navbar = () => {

  const [openDrawer,setOpendrawer]=useState(false)

  const handleOpenDrawer=()=>{
    setOpendrawer(prev=>!prev)
  }

  return (
    <nav className='absolute bg-[#2c2b2b] top-0 left-0 flex h-[60px]  w-screen justify-between items-center pl-[150px] max-lg:pl-[40px] max-xs:pl-0 pr-[80px] max-md:pr-5'>
        <div className='flex gap-2 items-center'>
        <Image alt='MelodyMentor-logo' src={logo} width={50} height={50} />
        <h1 className='font-extrabold text-2xl text-violet-600'>MelodyMentor</h1>
        </div>
        
        <ul className='flex gap-7 max-md:hidden'>
            <li><a className='font-bold active:bg-violet-200 px-2 py-1 rounded' href="">Home</a></li>
            <li><a className='font-bold active:bg-violet-200 px-2 py-1 rounded' href="">Courses</a></li>
            <li><a className='font-bold active:bg-violet-200 px-2 py-1 rounded' href="">About</a></li>
            <li><a className='bg-white border-2 text-black font-bold px-2 py-1 rounded-xl hover:text-white hover:bg-black' href="">SignUp</a></li>
        </ul>
        <div onClick={handleOpenDrawer} className='md:hidden flex items-center justify-center'>
        <i className='bx bx-menu-alt-right text-[40px]'></i>
        </div>
        {openDrawer&&
        <Sidedrawer closeDrawer={handleOpenDrawer}/>
        }

    </nav>
  )
}

export default Navbar