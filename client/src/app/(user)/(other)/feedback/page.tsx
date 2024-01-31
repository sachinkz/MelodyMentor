'use client'
import Button from '@/components/shared/Button/Button'
import Navbar from '@/components/user/Navbar/Navbar'
import React,{useState} from 'react'

const page = () => {

  const [subscribed,setSubscribed]=useState(false)

  return (
    <React.Fragment>
    {subscribed?(
      <div></div>
    ):(
      <div className='flex flex-col items-center justify-center h-screen gap-20 text-center'>
      <Navbar onStartPage={false}/>
      <h1 className='text-5xl font-extrabold '>NEED FEEDBACK?</h1>
      <div>
      <p className=''>Full Access members can use the Feedback feature to get feedback on their playing from Guitar Tricks instructors!</p>
      <p className=''>After sending a video of yourself playing, an instructor will review your video and create a feedback video, shared only with you!</p>
      <p className=''>Upgrade today to get access to this very helpful feature.</p>
      </div>
      <Button clsNames='px-10 py-3 font-bold uppercase' redirect='/auth/membership'>Get full access</Button>
      
    </div>)}
    </React.Fragment>
  )
}

export default page