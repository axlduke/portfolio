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
                <div className='flex flex-col justify-center items-center'>
                    <h1>
                        - Ace Malto -
                    </h1>
                    <span>
                        Full Stack Developer
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero