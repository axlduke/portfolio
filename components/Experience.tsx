import React from 'react'
import { MdWork, MdSchool, MdLocationPin, MdDateRange } from 'react-icons/md'
const Experience = () => {
    return (
        <div className='experience'>
            <div className='flex justify-center mt-72 lg:mt-0 xl:mt-0'>
                <h1 className='text-4xl font-bold font-Ysabeau'>My Journey</h1>
            </div>
            <div className='experience_section'>
                <div>
                    <h1 className='flex items-center mb-10 text-2xl font-bold font-Ysabeau'>
                        <MdWork />&nbsp;Experience
                    </h1>

                    <div className='font-Ysabeau mb-10'>
                        <h1 className='flex items-center text-[#9EF0F0] text-xl font-semibold'>
                            <MdLocationPin/>&nbsp;creotec philippines inc
                        </h1>
                        <p className='text-base ml-5'>
                            Quality Assurance / App Dev - INTERN (WFH)
                        </p>
                        <span className='flex items-center ml-5'>
                            <MdDateRange/>&nbsp;Feb to April - present
                        </span>
                    </div>
                    <div className='font-Ysabeau mb-10'>
                        <h1 className='flex items-center text-[#9EF0F0] text-xl font-semibold'>
                            <MdLocationPin/>&nbsp;Divine Word College of Legazpi
                        </h1>
                        <p className='text-base ml-5'>
                            Full Stack Developer- THESIS
                        </p>
                        <span className='flex items-center ml-5'>
                            <MdDateRange/>&nbsp;Jan to Dec - 2022
                        </span>
                    </div>
                    <div className='font-Ysabeau mb-10'>
                        <h1 className='flex items-center text-[#9EF0F0] text-xl font-semibold'>
                            <MdLocationPin/>&nbsp;Freelancing
                        </h1>
                        <p className='text-base ml-5'>
                            Web Dev. / Full Stack Dev
                        </p>
                        <span className='flex items-center ml-5'>
                            <MdDateRange/>&nbsp;Nov to May - 2022-23
                        </span>
                    </div>
                </div>
                <div>
                    <h1 className='flex items-center mb-10 text-2xl font-Ysabeau'>
                        <MdSchool/>&nbsp;Education
                    </h1>

                    <div className='font-Ysabeau mb-10'>
                        <h1 className='flex items-center text-[#9EF0F0] text-xl font-semibold'>
                            <MdLocationPin/>&nbsp;Divine Word College of Legazpi
                        </h1>
                        <p className='text-base ml-5'>
                            BS - Computer Science, Software Developer
                        </p>
                        <span className='flex items-center ml-5'>
                            <MdDateRange/>&nbsp;Graduate June 28, 2023
                        </span>
                    </div>

                    <div className='font-Ysabeau mb-10'>
                        <h1 className='flex items-center text-[#9EF0F0] text-xl font-semibold'>
                            <MdLocationPin/>&nbsp;Tabaco National High School
                        </h1>
                        <p className='text-base ml-5'>
                            General Academic Strand - Senior High
                        </p>
                        <span className='flex items-center ml-5'>
                            <MdDateRange/>&nbsp;Graduate - 2019
                        </span>
                    </div>

                    <div className='font-Ysabeau mb-10'>
                        <h1 className='flex items-center text-[#9EF0F0] text-xl font-semibold'>
                            <MdLocationPin/>&nbsp;Tabaco National High School
                        </h1>
                        <p className='text-base ml-5'>
                            Junior High
                        </p>
                        <span className='flex items-center ml-5'>
                            <MdDateRange/>&nbsp;Graduate - 2017
                        </span>
                    </div>

                    <div className='font-Ysabeau mb-10'>
                        <h1 className='flex items-center text-[#9EF0F0] text-xl font-semibold'>
                            <MdLocationPin/>&nbsp;Tabaco North Central Elem. School
                        </h1>
                        <p className='text-base ml-5'>
                            
                        </p>
                        <span className='flex items-center ml-5'>
                            <MdDateRange/>&nbsp;Graduate - 2013
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience