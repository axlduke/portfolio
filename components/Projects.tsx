import Image from 'next/image'
import React from 'react'

const Projects = () => {

    const gridImage = [
        {id: 1, imageUrl: '/project.png', name: 'THESIS' , link: 'https://github.com/axlduke/CS_thesis'},
        {id: 2, imageUrl: '/project2.png', name: 'CARSITE CLONE' , link: 'https://nextjs-car-ace.vercel.app'},
    ]
    
    return (
        <div className='projects'>
            <div className='flex justify-center xl:mt-10 lg:mt-10'>
                <h1 className='text-4xl font-bold font-Ysabeau text-black'>Projects</h1>
            </div>
            <div className='project_section'>
                {gridImage.map((image) => (
                    <div key={image.id} className='flex flex-col items-center group w-auto p-5 rounded-lg bg-slate-500'>
                        <Image src={image.imageUrl} alt={`Image ${image.id}`} width={300} height={300} className=' h-52 object-contain'/>
                        <span className='text-[#9EF0F0] text-xl font-Ysabeau font-bold opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out'>
                            <a href={image.link}>
                                {image.name}
                            </a>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects