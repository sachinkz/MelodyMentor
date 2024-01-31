"use client"
import Header from '@/components/instructor/Header'
import Sidebar from '@/components/instructor/Sidebar'
import Chart from '@/components/instructor/Chart'
import React from 'react'

const page = () => {
  return (
    <div className='flex'>
      <Header />
      <Sidebar />
      <div className='w-full flex items-center justify-start'>
        <Chart />
      </div>
    </div>
  )
}

export default page