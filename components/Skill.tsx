import React from 'react'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaNode, FaPython, FaJava, FaNpm, FaGitAlt } from 'react-icons/fa'
import { BiLogoJavascript, BiLogoReact, BiLogoPhp, BiLogoFirebase, BiLogoNetlify } from 'react-icons/bi'
import { SiMysql, SiTailwindcss, SiVercel } from 'react-icons/si'
import { FiFramer } from 'react-icons/fi'
import { PiFigmaLogoDuotone } from 'react-icons/pi'
const Skill = () => {
    return (
        <div className='skill'>
            <div className='flex justify-center mt-72 lg:mt-0 xl:mt-0'>
                <h1 className='text-4xl font-bold font-Ysabeau'>My Technical Skills</h1>
            </div>
            <div className='skill_section'>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <FaHtml5/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Html
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <FaCss3Alt/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Css
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <BiLogoJavascript/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Javascript
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <BiLogoReact/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Reactjs
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <BiLogoPhp/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Php
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <SiMysql/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        MySql
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <SiTailwindcss/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Tailwindcss
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <FiFramer/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Framer Motion
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <FaBootstrap/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Bootstrap
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <FaNode/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Nodejs
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <FaPython/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Python
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <FaJava/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Java
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <PiFigmaLogoDuotone/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Figma
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <BiLogoFirebase/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Firebase
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <BiLogoNetlify/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Netlify
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <SiVercel/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        Vercel
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <FaNpm/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        NPM
                    </span>
                </div>
                <div className='flex flex-col items-center group w-auto p-10 rounded-lg bg-slate-500'>
                    <div className=' text-7xl'>
                        <FaGitAlt/>
                    </div>
                    <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                        GIT
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Skill