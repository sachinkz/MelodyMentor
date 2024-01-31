'use client'
import React, { useState } from 'react'
import 'boxicons/css/boxicons.min.css'
import { lessonContents } from '@/utils/DUMMY_DATAS'

const ContentsSection = () => {
    const [progressPage, setProgressPage] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState(null);
    const [contentClicked, setContentClicked] = useState(false);
    const [chapterClicked, setChapterClicked] = useState(false);


    const handleContentSelect=(index:any)=>{
        setContentClicked(prev=>!prev)
        setSelectedContent(index)
    }
    const handleChapterSelect=(index:any)=>{
        setChapterClicked(prev=>!prev)
        setSelectedChapter(index)
    }
    return (
        <div className="px-10 max-md:px-2 pb-5 bg-[#1b1a1a] w-[50%] mt-10 max-md:w-full">
            <div className="flex gap-2">
                <button onClick={() => setProgressPage(false)} className={`${!progressPage && 'border-b border-violet-400 text-violet-400'} active:border-none hover:text-violet-300 min-w-[100px] max-md:min-w-fit px-6 py-2 font-bold flex gap-2 justify-center`}>Contents</button>
                <button onClick={() => setProgressPage(true)} className={` ${progressPage && 'border-b border-violet-400 text-violet-400'} active:border-none  hover:text-violet-300 min-w-[100px] max-md:min-w-fit px-6 py-2 font-bold flex gap-2 justify-center`}>Progress</button>
            </div>

            <hr className='opacity-30' />
            {!progressPage &&
                (<div className="flex flex-col items-start gap-3 mt-3">
                    {lessonContents.map((contents, contentIndex) => (
                        <div className='w-full' key={contentIndex}>
                            <button onClick={() => handleContentSelect(contentIndex)} className="capitalize border-b border-[#454545] w-full flex items-center active:bg-violet-300 gap-2 mb-2">
                                <i className={`bx ${selectedContent === contentIndex && contentClicked ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i> {contents.title}
                            </button>
                            {selectedContent === contentIndex && contentClicked && contents.chapters.map((chapter, chapterIndex) => (
                                <div className='w-full' key={chapterIndex}>
                                    <button onClick={() => handleChapterSelect(chapterIndex)} className="capitalize border-b pl-10 border-[#454545] w-full flex items-center gap-2 mb-2">
                                        <i className={`bx ${selectedChapter === chapterIndex && chapterClicked ? 'bx-chevron-up' : 'bx-chevron-down'}`}></i> {chapter.title}
                                    </button>
                                    {selectedChapter === chapterIndex && chapterClicked && chapter.lessons.map((lesson, lessonIndex) => (
                                        <button key={lessonIndex} className="border-b capitalize pl-20 border-[#454545] w-full flex items-center gap-2 mb-2">
                                            {lesson.title}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>)}
        </div>
    )
}

export default ContentsSection;
