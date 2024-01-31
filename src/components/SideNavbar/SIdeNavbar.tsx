import React from 'react'

const SIdeNavbar = () => {
  return (
    <div className='w-full flex flex-col gap-3'>
      <div className='w-full bg-[#303030] cursor-pointer p-3 font-bold rounded-lg border-2 border-black hover:bg-[#181818] hover:border-white hover:border-2 bg-black'><i className='bx bx-home-circle m-2'></i>HOME</div>
      <div className='w-full bg-[#303030] cursor-pointer p-3 font-bold rounded-lg border-2 border-black hover:bg-[#181818] hover:border-white hover:border-2 bg-black'><i className='bx bx-movie-play m-2'></i>LAST LESSON</div>
      <div className='w-full bg-[#303030] cursor-pointer p-3 font-bold rounded-lg border-2 border-black hover:bg-[#181818] hover:border-white hover:border-2 bg-black'><i className='bx bx-wrench m-2' ></i>TOOLBOX</div>
      <div className='w-full bg-[#303030] cursor-pointer p-3 font-bold rounded-lg border-2 border-black hover:bg-[#181818] hover:border-white hover:border-2 bg-black'><i className='bx bx-chalkboard m-2'></i>PROGRESS</div>
      <div className='w-full bg-[#303030] cursor-pointer p-3 font-bold rounded-lg border-2 border-black hover:bg-[#181818] hover:border-white hover:border-2 bg-black'><i className='bx bxs-user-voice m-2'></i>INSTRUCTORS</div>
    </div>
  )
}

export default SIdeNavbar