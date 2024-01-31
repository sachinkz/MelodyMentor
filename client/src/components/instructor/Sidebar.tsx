"use client"
import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PaidIcon from '@mui/icons-material/Paid';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {

  const [taskbar,setTaskbar]=useState(true)

  const handleTakbar=()=>{
    setTaskbar(prev=>!prev);
  }
  return (
    <div className={` h-screen pt-20  bg-[#151515] relative ease-in-out transition-all ${taskbar?"w-[200px]":"w-[65px]"}`}>
      <div onClick={handleTakbar}><MenuIcon className={`ml-5 mb-4 cursor-pointer ease-in-out transition-all ${taskbar?"opacity-0":"opacity-100"}`}/></div>
      <div className={`absolute top-[60%]  right-2 opacity-20 hover:opacity-70 cursor-pointer ease-in-out transition-all ${taskbar?"":"hidden"}`} onClick={handleTakbar}><ArrowBackIosIcon/></div>
      <ul className='cursor-pointer flex flex-col'>
        <li className=' flex items-center gap-4 py-4 pl-5 hover:bg-[#0c0c0c]'><DashboardIcon/> <p className={`ease-in-out transition-all ${taskbar?"block":"hidden"}`}>Dashboard</p></li>
        <li className='flex items-center gap-4 py-4 pl-5 hover:bg-[#0c0c0c]'><GroupIcon/> <p className={`ease-in-out transition-all ${taskbar?"block":"hidden"}`}>Students</p></li>
        <li className='flex items-center gap-4 py-4 pl-5 hover:bg-[#0c0c0c]'><AnalyticsIcon/> <p className={`ease-in-out transition-all ${taskbar?"block":"hidden"}`}>Analytics</p></li>
        <li className='flex items-center gap-4 py-4 pl-5 hover:bg-[#0c0c0c]'><MusicVideoIcon/> <p className={`ease-in-out transition-all ${taskbar?"block":"hidden"}`}>Courses</p></li>
        <li className='flex items-center gap-4 py-4 pl-5 hover:bg-[#0c0c0c]'><AccessTimeFilledIcon/> <p className={`ease-in-out transition-all ${taskbar?"block":"hidden"}`}>Watch hours</p></li>
        <li className='flex items-center gap-4 py-4 pl-5 hover:bg-[#0c0c0c]'><PaidIcon/> <p className={`ease-in-out transition-all ${taskbar?"block":"hidden"}`}>Payments</p></li>
      </ul>
      
        <div className='flex items-center gap-4 py-4 pl-5 hover:bg-[#0c0c0c] absolute bottom-12 '><SettingsApplicationsIcon/> <p className={`${taskbar?"block":"hidden"}`}>Settings</p></div>
    </div>
  )
}

export default Sidebar