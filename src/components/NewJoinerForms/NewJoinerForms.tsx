'use client'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import guitarKid from 'public/guitar1.jpg'
import violinKid from 'public/violin1.jpg'
import pianoKid from 'public/piano1.jpg'
import singerKid from 'public/mic2.jpg'
import React, { useState } from 'react'

const NewJoinerForm = () => {

  const [selection,setSelection]=useState('')

  return (
    <React.Fragment>
      <Navbar />
      <h1 className='text-3xl font-extrabold text-violet-400 text-center pt-32'>What Do You Want To Learn?</h1>
      <div className='mt-20 w-full flex items-center flex-col'>
      <div className=' grid grid-flow-col gap-20 py-10 max-lg:grid-rows-2 max-sm:grid-rows-4'>

        <div onClick={()=>setSelection('GUITAR')} className=''>
          <Image className={`${selection==='GUITAR'? 'border-2':''} bg-blend-screen cursor-pointer shadow-slate-900 shadow-2xl hover:shadow-none hover:scale-105 transition-transform m-auto hover:border-2 border-vilolet-300`} src={guitarKid} alt='gitarKid' height={200} />
          <h3 className='text-center text-xl font-extrabold pt-4 '>GUITAR</h3>
        </div>
        <div onClick={()=>setSelection('PIANO')} className=''>
          <Image className={`${selection==='PIANO'? 'border-2':''} bg-blend-screen cursor-pointer shadow-slate-900 shadow-2xl hover:shadow-none hover:scale-105 transition-transform m-auto hover:border-2 border-vilolet-300`} src={pianoKid} alt='gitarKid' height={200} />
          <h3 className=' text-center text-xl font-extrabold pt-4 '>PIANO</h3>
        </div>
        <div onClick={()=>setSelection('VIOLIN')} className=''>
          <Image className={`${selection==='VIOLIN'? 'border-2':''} bg-blend-screen cursor-pointer shadow-slate-900 shadow-2xl hover:shadow-none hover:scale-105 transition-transform m-auto hover:border-2 border-vilolet-300`} src={violinKid} alt='gitarKid' height={200} />
          <h3 className=' text-center text-xl font-extrabold pt-4 '>VIOLIN</h3>
        </div>
        <div onClick={()=>setSelection('SINGING')} className=''>
          <Image className={`${selection==='SINGING'? 'border-2':''} bg-blend-screen cursor-pointer shadow-slate-900 shadow-2xl hover:shadow-none hover:scale-105 transition-transform m-auto hover:border-2 border-vilolet-300`} src={singerKid} alt='gitarKid' height={200} />
          <h3 className=' text-center text-xl font-extrabold pt-4 '>SINGING</h3>
        </div>
      </div>
      <button disabled className='cursor-pointer px-10 py-3 mt-10 mb-28 bg-violet-400 hover:bg-violet-300 rounded-2xl text-black font-bold'>SELECT</button>
      </div>
    </React.Fragment>
  )
}

export default NewJoinerForm;