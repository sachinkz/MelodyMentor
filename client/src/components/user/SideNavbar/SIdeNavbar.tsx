import React from 'react'
import Image from 'next/image'
import { leftImages } from '@/utils/DUMMY_DATAS'
import Link from 'next/link'

type SideNavbarProps={
  show:boolean
}

const SIdeNavbar = (props:SideNavbarProps) => {
  return (
    <div className={`max-w-[300px]   flex flex-col  items-center p-2 max-lg:hidden min-w-[200px] `}>
      <div className='w-full flex flex-col gap-3'>
        <Link href='/home'><div className='w-full bg-[#191919] cursor-pointer p-3 font-bold
         rounded-lg border-2 border-black hover:bg-[#181818] hover:border-white hover:border-2'><i className='bx bx-home-circle m-2'></i>HOME</div></Link>
        <Link href='/'><div className='w-full bg-[#191919] cursor-pointer p-3 font-bold
         rounded-lg border-2 border-black hover:bg-[#181818] hover:border-white hover:border-2'><i className='bx bx-movie-play m-2'></i>LAST LESSON</div></Link>
        <Link href='/'><div className='w-full bg-[#191919] cursor-pointer p-3 font-bold
         rounded-lg border-2 border-black hover:bg-[#181818] hover:border-white hover:border-2'><i className='bx bx-wrench m-2' ></i>TOOLBOX</div></Link>
        <Link href='/progress'><div className='w-full bg-[#191919] cursor-pointer p-3 font-bold
         rounded-lg border-2 border-black hover:bg-[#181818] hover:border-white hover:border-2'><i className='bx bx-chalkboard m-2'></i>PROGRESS</div></Link>
        <Link href='/instructors'><div className='w-full bg-[#191919] cursor-pointer p-3 font-bold
         rounded-lg border-2 border-black hover:bg-[#181818] hover:border-white hover:border-2'><i className='bx bxs-user-voice m-2'></i>INSTRUCTORS</div></Link>
      </div>
      <div className='w-full object-contain flex flex-col gap-10 my-5'>
        <Link href='/custom-lesson'><div>
          <Image src={leftImages[0]} className='bg-[#ffffff12] border-2 border-black rounded-lg cursor-pointer hover:border-white' alt='lessons' />
        </div></Link>
        <Link href='/feedback'><div >
          <Image src={leftImages[1]} className='bg-[#ffffff12] border-2 border-black rounded-lg cursor-pointer hover:border-white' alt='lessons' />
        </div></Link>
        <Link href='/live-class'><div >
          <Image src={leftImages[2]} className='bg-[#ffffff12] border-2 border-black rounded-lg cursor-pointer hover:border-white' alt='lessons' />
        </div></Link>
      </div>
    </div>
  )
}

export default SIdeNavbar