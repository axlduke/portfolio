import React from 'react'

const About = () => {
    return (
        <div className='about'>
            <div className='flex justify-center mt-72 lg:mt-0 xl:mt-0'>
                <h1 className='text-4xl font-bold font-Ysabeau'>About me</h1>
            </div>
            <div className='about_section'>
                <div className='grid grid-cols-2 lg:mr-52 text-xl'>
                    <div>
                        <div className='flex items-center font-Ysabeau gap-5 my-5'>
                            <h1 className='font-bold'>Full Name:</h1>
                        </div>
                        <div className='flex items-center font-Ysabeau gap-5 my-5'>
                            <h1 className='font-bold'>Phone:</h1>
                        </div>
                        <div className='flex items-center font-Ysabeau gap-5 my-5'>
                            <h1 className='font-bold'>Email:</h1>
                        </div>
                        <div className='flex items-center font-Ysabeau gap-5 my-5'>
                            <h1 className='font-bold'>Address:</h1>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center font-Ysabeau gap-5 my-5'>
                            <span className=' text-gray-600'>Ace Malto</span>
                        </div>
                        <div className='flex items-center font-Ysabeau gap-5 my-5'>
                            <span className=' text-gray-600'>+63 920-692-8571</span>
                        </div>
                        <div className='flex items-center font-Ysabeau gap-5 my-5'>
                            <span className=' text-gray-600 truncate'>maltoace9@gmail.com</span>
                        </div>
                        <div className='flex items-center font-Ysabeau gap-5 my-5'>
                            <span className=' text-gray-600'>Bicol, Albay</span>
                        </div>
                    </div>
                </div>
                <div>
                    <p className=' font-Ysabeau text-justify text-xl caret-selection-blue'>My name is <strong className='text-2xl'>Ace Malto,</strong><br/> I am a computer science fresh graduate specializing in software development. With a strong dedication to my craft, I excel in developing software solutions for small to medium-sized projects. I have extensive experience working on medium-scale projects and have also ventured into <strong>freelancing</strong>.
                        In my spare time, I love producing UI/UX designs using Figma, preparing for future projects. Additionally, <strong>I have consistently pursued personal and academic projects for over 4 years</strong>, showcasing my commitment and passion for software development. I constantly seek knowledge and keep up with the latest technologies by watching tutorials in youtube.
                        Beyond my professional pursuits, I find relaxation in watching anime during breaks and indulging in culinary delights. I believe my blend of technical expertise, continuous learning, and ability to balance work and leisure make me an ideal candidate for employers or hiring managers seeking a dedicated and well-rounded software developer.</p>
                </div>
            </div>
        </div>
    )
}

export default About