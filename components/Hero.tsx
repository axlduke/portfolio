import Image from 'next/image'
import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero_image'>
                <Image src='/avatar.png' 
                    width={300}
                    height={300}
                    alt='avatar'
                    className=' object-contain'
                />
                <div className='flex flex-col justify-center text-[#9EF0F0] items-center mt-5'>
                    <h1 className='text-6xl -rotate-6'>
                        - Ace Malto -
                    </h1>
                    <span className='mt-10 text-lg font-bold font-Ysabeau lg:text-2xl'>
                        Full Stack Developer
                    </span>
                    <div className='hero_links'>
                        <div className='flex justify-center gap-3 flex-wrap'>
                            <div className='text-4xl'>
                                <a href="https://github.com/acemalto" target="_blank">
                                    <FaFacebookSquare/>
                                </a>
                            </div>
                            <div className='text-4xl'>
                                <a href="https://github.com/acemalto" target="_blank">
                                    <FaLinkedin/>
                                </a>
                            </div>
                            <div className='text-4xl'>
                                <a href="https://github.com/acemalto" target="_blank">
                                    <FaGithubSquare/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero