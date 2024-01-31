import Navbar from "@/components/user/Navbar/Navbar"
import YouTubePlayer from "@/components/shared/VideoPlayer/VideoPlayer"
import ContentsSection from "@/components/user/ContentsSection"
import 'boxicons/css/boxicons.min.css'
import React from "react"

const page = () => {
    return (
        <React.Fragment>
            <Navbar onStartPage={false} />
            <div className="mt-20 flex flex-col items-center gap-8">
                <h1 className="text-center text-3xl text-white font font-extrabold">Video Title</h1>
                <div className="w-[70%] h-full aspect-video max-lg:w-full bg-[#131313] ">
                    <YouTubePlayer videoId="iNWNpHqg9uk"/>
                </div>
                <div className="flex gap-10 ">
                    <button className="border-2 min-w-[200px] max-md:min-w-fit px-6 py-3 font-bold flex gap-2 justify-center"><i className='bx bx-chevrons-left text-2xl'></i>PREV</button>
                    <button className="border-2 min-w-[200px] max-md:min-w-fit px-6 py-3 font-bold flex gap-2 justify-center">NEXT<i className='bx bx-chevrons-right text-2xl'></i></button>
                </div>
            </div>
            <div className="flex gap-2 max-md:flex-col max-md:items-center mb-5">
                <div className="mt-10 bg-[#1b1a1a] p-5 max-md:p-3 w-[50%] max-md:w-full">
                    <h2 className="text-center font-extrabold text-3xl m-5">Description</h2>
                    <p className="text-gray-400">
                        Before we do anything else, let's go ahead give the open strings a big old open strum. This is the starting point for our guitar journey, and while it may not be the prettiest sound you've ever head, it's also not terrible. And that's pretty cool, cause on many other instruments you have to study for a long time before you can even make a sound that isn't terrible. And it only goes up from here!
                    </p>
                    <h3 className="font-thin mt-10">INSTRUCTOR</h3>
                    <h5 className="text-xl text-gray-300">Anderson Mouridsen</h5>
                </div>
                <ContentsSection/>
            </div>

        </React.Fragment>
    )
}

export default page