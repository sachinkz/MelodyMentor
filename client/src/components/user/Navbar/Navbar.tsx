'use client'
import 'boxicons/css/boxicons.min.css';
import Image from 'next/image';
import logo from 'public/logo.png'
import { useState } from 'react';
import Sidedrawer from '../SideDrawer/Sidedrawer';
import Link from 'next/link';

type navBarProps={
  onStartPage:boolean
}

const Navbar = (props:navBarProps) => {

  const [openDrawer,setOpendrawer]=useState(false)

  const handleOpenDrawer=()=>{
    setOpendrawer(prev=>!prev)
  }

  return (
    <nav className='absolute bg-gradient-to-r  from-10% from-[#782cf2ee]   to-[#862ed222]  top-0 left-0 flex h-[60px]  w-screen justify-between py-8 items-center pl-[150px] max-xl:pl-[40px] max-sm:pl-2 pr-[80px]  max-lg:pr-10 max-md:pr-5 z-10'>
        <Link href='/home'><div className=' cursor-pointer flex gap-2 items-center'>
        <Image alt='MelodyMentor-logo' src={logo} width={50} height={50} />
        <h1 className='[text-shadow:_0_2px_0_rgb(0_0_0_/_90%)] font-extrabold text-2xl drop-shadow-xl  text-white'>MelodyMentor</h1>
        </div></Link>
        
        <ul className='flex gap-3 max-lg:hidden'>
            <li><Link className='font-bold active:bg-violet-200 px-2 py-1 rounded' href='/home'>Home</Link></li>
            <li><Link className='font-bold active:bg-violet-200 px-2 py-1 rounded' href='/short-videos'>Shorts</Link></li>
            <li><Link className='font-bold active:bg-violet-200 px-2 py-1 rounded' href='/live-class'>Live Sessions</Link></li>
            <li><Link className='font-bold active:bg-violet-200 px-2 py-1 rounded' href='/home'>Songs</Link></li>
            <li><Link className='font-bold active:bg-violet-200 px-2 py-1 rounded text-black border-2 hover:bg-transparent hover:text-white bg-white' href='/auth/membership'>Subscribe</Link></li>
            <li><Link className='font-bold active:bg-violet-200 px-2 py-1 border-2 rounded hover:bg-white hover:text-black' href='/auth/register'>SignUp</Link></li>
        </ul>
        <div onClick={handleOpenDrawer} className='lg:hidden flex items-center justify-center'>
        <i className='bx bx-menu-alt-right text-[40px]'></i>
        </div>
        {openDrawer&&
        <Sidedrawer onStartPage={props.onStartPage} closeDrawer={handleOpenDrawer}/>
        }

    </nav>
  )
}

export default Navbar