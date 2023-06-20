import Image from 'next/image'
import React from 'react'

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
                    <span className='mt-10 text-lg font-bold'>
                        Full Stack Developer
                    </span>
                    <div className='hero_links'>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero