import Button from '@/components/shared/Button/Button'
import Navbar from '@/components/user/Navbar/Navbar'
import SIdeNavbar from '@/components/user/SideNavbar/SIdeNavbar'
import { instructors } from '@/utils/DUMMY_DATAS'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar onStartPage={false}/>
            <div className='w-full m-auto min-h-screen object-contain flex justify-center pt-24'>
                <SIdeNavbar show/>
                <div className='w-full max-[800px]:grid-cols-2  max-[550px]:grid-cols-1 max-lg:grid-cols-3 grid grid-flow-row grid-rows-4  grid-cols-3 gap-5 bg-[#121212] m-2 rounded-lg p-6'>
                    {instructors.map(tutor => (
                        <div key={tutor.name} className='flex flex-col gap-5 items-center justify-evenly p-5 bg-[#181818] rounded-lg'>
                            <h1 className='text-xl font-extrabold capitalize'>{tutor.name}</h1>
                            <Image src={tutor.image} alt='instructor' width={200} />
                            <Button redirect={tutor.channel} clsNames='p-2 font-bold'>Visit Channel</Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page