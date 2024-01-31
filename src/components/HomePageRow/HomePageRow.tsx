'use client'
import Image from 'next/image'
import React, { useState } from 'react'

type homeRowProps = {
    heading: string,
    imgSrc: string,
    name: string,
    subName: string,
    date: string,
}

type arrayProps = {
    datas: homeRowProps[]
}

const HomePageRow = (props: arrayProps) => {

    const [showMore,setShowMore]=useState(false);

    const handleShowMore=()=>{
        setShowMore(prev=>!prev)
        console.log(showMore)
    }

    return (
        <React.Fragment>

            <div className=''>
                <div className='flex justify-between'>
                    <h1 className='font-extrabold '>RECENTLY WATCHED</h1>
                    <button onClick={handleShowMore} className='border-gray-400 border px-2 py-1 rounded-t-lg text-sm hover:bg-gray-900'>{showMore?'show less':"show more"}</button>
                </div>
                <hr className='mb-6 opacity-30' />
                <div className='w-full text-white overflow-x-clip'>

                    <div className={`flex   ${showMore&&'flex-wrap'}`}>
                        {props.datas.map((data, i) => {
                            return (
                                <div key={i} className='flex-shrink-0 max-md:w-[50%] max-lg:w-[33%] w-[25%] p-4'>
                                    <Image className='rounded-lg shadow-xl shadow-black mb-4' src={data.imgSrc} alt='thumbnail' />
                                    <h2 className='mt-2'>{data.name}</h2>
                                    <h4 className='text-sm my-2 opacity-60'>{data.subName}</h4>
                                    <h6 className='text-xs opacity-40'>{data.date}</h6>
                                </div>
                                
                            )
                        })}
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default HomePageRow