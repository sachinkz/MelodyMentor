import React from 'react'
import Link from 'next/link'
import logo from 'public/logo.png'
import Image from 'next/image'


const Header = () => {
  return (
    <div className='absolute bg-gradient-to-r  from-10% from-violet-900   to-violet-400  top-0 left-0 flex h-[60px]  w-screen justify-between py-8 items-center pl-[50px] max-xl:pl-[40px] max-sm:pl-2 pr-[80px]  max-lg:pr-10 max-md:pr-5 z-10'>
      <Link href='/instructor/dashboard'><div className=' cursor-pointer flex gap-2 items-center'>
        <Image alt='MelodyMentor-logo' src={logo} width={50} height={50} />
        <h1 className=' font-extrabold text-2xl drop-shadow-xl  text-gray-200'>MelodyMentor</h1>
      </div></Link>
    </div>
  )
}

export default Header