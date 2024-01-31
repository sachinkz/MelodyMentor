'use client'
import React, { useState } from 'react'
import logo from 'public/logo.png'
import Image from 'next/image'
import 'boxicons/css/boxicons.min.css'


const page = () => {

    const [selectedType, setSelectedType] = useState("")
    const [selectedTypeErr, setSelectedTypeErr] = useState("")
    const [courseTitle, setCourseTitle] = useState("")
    const [studentType, setStudentType] = useState("")
    const [studentTypeErr, setStudentTypeErr] = useState("")
    const [availability, setAvailability] = useState("")
    const [availabilityErr, setAvailabilityErr] = useState("")
    const [titleErr, setTitleErr] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [allValues, setAllValues] = useState({})

    const selectType = (type: string) => {
        setSelectedType(type)
    }

    const nextPage = () => {
        if (currentPage === 1) {
            if (selectedType === "complete" || selectedType === "specific") {
                setCurrentPage(2)
            } else {
                setSelectedTypeErr("*please choose an option")
            }
        } else if (currentPage === 2) {
            if (titleErr === "" && courseTitle.length >= 10) {
                setCurrentPage(3)
            } else if (titleErr === "") {
                setTitleErr("*please add a title")
            }
        } else if (currentPage === 3) {
            if (studentType !== "") {
                setCurrentPage(4)
            } else {
                setStudentTypeErr("*please choose an option")
            }
        } else if (currentPage === 4) {
            if (availability !== "") {
                let allVals = {
                    courseType: selectedType,
                    courseTitle: courseTitle,
                    studentType: studentType,
                    availability: availability,
                }
                setAllValues(allVals);
            } else {
                setAvailabilityErr("*please choose an option")
            }
        }
    }

    const prevPage = () => {
        setCurrentPage(prev => prev - 1)
    }


    const handleCourseTitle = (e: string) => {
        if (e.length > 90) {
            setTitleErr("*cannot use more than 90 characters")
        } else if (e.length < 10) {
            setTitleErr("*Please type a course title (more than 10 characters expected)")
        } else {
            setTitleErr("")
        }
        setCourseTitle(e)
    }

    const handleAvailability = (e: string) => {
        setAvailability(e)
    }

    return (
        <div className='w-full min-h-screen '>
            <div className='bg-[#0e0e0e] flex justify-between items-center pr-10 max-md:pr-2'>
                <div className='flex items-center'>
                    <div className='flex justify-center items-center gap-2 border-r-4 border-black px-5 py-2 max-md:py-5'>
                        <Image alt='MelodyMentor-logo' className='max-md:w-[25px] max-md:h-[25px] ' src={logo} width={50} height={50} />
                        <h1 className=' font-extrabold text-2xl drop-shadow-2xl max-md:text-lg text-gray-200'>MelodyMentor</h1>
                    </div>
                    <p className='capitalize ml-5 '>Step {currentPage} of 4</p>
                </div>
                <a className='text-blue-500 font-bold text-xl' href="">Exit</a>
            </div>

            <div className='w-full h-[5px] bg-[#8a8a8a]'>
                <div className={`w-[${25 * currentPage}%] h-full bg-violet-500`}></div>
            </div>

            {currentPage === 1 && (<div className='w-full h-full py-20 flex flex-col justify-center items-center '>
                <h1 className=' font-extrabold text-violet-300 text-3xl text-center'>What type of course are you making?</h1>
                <div className='w-full h-full flex justify-center max-md:flex-col items-center gap-8 mt-10'>
                    <div onClick={() => selectType("complete")} className={`w-[250px] h-[300px] border-2 border-[#373737] ${selectedType === "complete" ? "border-white" : "border-[#373737]"} hover:border-white flex flex-col items-center justify-evenly`}>
                        <i className='bx bx-check-shield text-5xl'></i>
                        <h1 className='font-bold text-xl cursor-default'>Zero To Hero</h1>
                        <p className='p-3 text-center cursor-default'>Complete Course where you will cover from the basics to the advanced techniques</p>
                    </div>
                    <div onClick={() => selectType("specific")} className={`w-[250px]  h-[300px] border-2 border-[#373737] ${selectedType === "specific" ? "border-white" : "border-[#373737]"} hover:border-white flex flex-col items-center justify-evenly`}>
                        <i className='bx bx-crosshair text-5xl' ></i>
                        <h1 className='font-bold text-xl cursor-default'>Specific Topic</h1>
                        <p className='p-3 text-center cursor-default'>You want to teach a specific topics focusing intermediate and advanced students</p>
                    </div>
                </div>
                <button onClick={nextPage} className='px-10 py-2 font-bold mt-10 bg-violet-400 rounded-lg hover:text-black'>Next</button>
                <p className='text-sm mt-5 text-center text-[orange]'>{selectedTypeErr && selectedTypeErr}</p>
            </div>)}

            {currentPage === 2 && (
                <div className='w-full flex justify-center flex-col items-center py-20 gap-10'>
                    <h1 className='text-3xl font-extrabold text-violet-400 text-center'>Give a nice Title for your course</h1>
                    <input onChange={(e) => handleCourseTitle(e.target.value)} value={courseTitle} className='w-[60%] max-md:w-[90%] max-md:placeholder:text-xs py-2 px-5 bg-transparent border-2' placeholder='Eg: Learn Music theory from Scratch' type="text" />
                    <div className='flex gap-5'>
                        <button onClick={prevPage} className='px-10 py-2 font-bold mt-14 bg-violet-400 rounded-lg hover:text-black'>Prev</button>
                        <button onClick={nextPage} className='px-10 py-2 font-bold mt-14 bg-violet-400 rounded-lg hover:text-black'>Next</button>
                    </div>
                    <p className='text-sm text-center text-[orange]'>{titleErr && titleErr}</p>
                </div>
            )}

            {currentPage === 3 && (
                <div className='w-full flex justify-center flex-col items-center py-20 gap-10'>
                    <h1 className='text-3xl font-extrabold text-violet-400 text-center'>which category of students are you focusing on?</h1>
                    <select onChange={e => setStudentType(e.target.value)} name="studentType" id="" className='w-[60%] max-md:w-[90%] max-md:placeholder:text-xs py-2 px-5 bg-transparent border-2'>
                        <option value="" className='text-white bg-[#585858] p-8 h-10 w-full'>Select type of students . . .</option>
                        <option value="beginner" className='text-white bg-black p-8 h-10 w-full'>Beginner</option>
                        <option value="intermediate" className='text-white bg-black p-8 h-10 w-full'>Intermediate</option>
                        <option value="advanced" className='text-white bg-black p-8 h-10 w-full'>Advanced</option>
                        <option value="all" className='text-white bg-black p-8 h-10 w-full'>All type of students</option>
                    </select>
                    <p className='text-sm text-center text-[orange]'>{studentTypeErr && studentTypeErr}</p>
                    <div className='flex gap-5'>
                        <button onClick={prevPage} className='px-10 py-2 font-bold mt-14 bg-violet-400 rounded-lg hover:text-black'>Prev</button>
                        <button onClick={nextPage} className='px-10 py-2 font-bold mt-14 bg-violet-400 rounded-lg hover:text-black'>Next</button>
                    </div>
                </div>
            )}

            {currentPage === 4 && (
                <div className='w-full flex justify-center flex-col items-center py-20 gap-10'>
                    <h1 className='text-3xl font-extrabold text-violet-400 text-center'>How much time can you spend creating your course per week?</h1>
                    <p className='text-sm text-center text-[orange]'>{availabilityErr && availabilityErr}</p>
                    <label onClick={()=>handleAvailability("2")} className='flex items-center justify-start gap-5 border-2 border-white w-[40%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[95%] max-sm:text-sm p-3' htmlFor="">
                        <input className='appearance-none w-4 h-4 rounded-3xl bg-white checked:bg-green-500 checked:border-2 checked:border-orange-600' onChange={(e) => handleAvailability(e.target.value)} checked={availability === "2"} name='time' type="radio" value="2" />
                        im very busy (0-2 hours)
                    </label>
                    <label onClick={()=>handleAvailability("4")} className='flex items-center justify-start gap-5 border-2 border-white w-[40%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[95%] max-sm:text-sm p-3' htmlFor="">
                        <input className='appearance-none w-4 h-4 rounded-3xl bg-white checked:bg-green-500 checked:border-2 checked:border-orange-600' onChange={(e) => handleAvailability(e.target.value)} checked={availability === "4"} name='time' type="radio" value="4" />
                        i will work on this on the side (2-4 hours)
                    </label>
                    <label onClick={()=>handleAvailability("5")} className='flex items-center justify-start gap-5 border-2 border-white w-[40%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[95%] max-sm:text-sm p-3' htmlFor="">
                        <input className='appearance-none w-4 h-4 rounded-3xl bg-white checked:bg-green-500 checked:border-2 checked:border-orange-600' onChange={(e) => handleAvailability(e.target.value)} checked={availability === "5"} name='time' type="radio" value="5" />
                        i have lots of flexibility (5+ hours)
                    </label>
                    <label onClick={()=>handleAvailability("depends")} className='flex items-center justify-start gap-5 border-2 border-white w-[40%] max-lg:w-[60%]  max-md:w-[80%] max-sm:w-[95%] max-sm:text-sm  p-3' htmlFor="">
                        <input className='appearance-none w-4 h-4 rounded-3xl bg-white checked:bg-green-500 checked:border-2 checked:border-orange-600' onChange={(e) => handleAvailability(e.target.value)} checked={availability === "depends"} name='time' type="radio" value="depends" />
                        I cannot decide now it depends
                    </label>
                    <div className='flex gap-5'>
                        <button onClick={prevPage} className='px-10 py-2 font-bold mt-14 bg-violet-400 rounded-lg hover:text-black'>Prev</button>
                        <button onClick={nextPage} className='px-10 py-2 font-bold mt-14 bg-violet-400 rounded-lg hover:text-black'>Finish</button>
                    </div>


                </div>
            )}
        </div>
    )
}

export default page