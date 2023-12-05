"use client"
import React from 'react'
import ProjectCards from './sub/ProjectCards'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '@/utils/motion'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[22px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
        I haven&apos;t embarked on any major projects yet, but stay tuned!
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className='text-[16px] text-[#b49bff] font-small mt-[10px] text-center mb-[15px]'
      >
        All updates on upcoming projects will be promptly posted on this website.
      </motion.div>

      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCards
          src='/Space Portfolio Assets/CardImage.png'
          title='Modern Next.js Portfolio'
          description='' />
        <ProjectCards
          src='/Space Portfolio Assets/CardImage.png'
          title='Modern Next.js Portfolio'
          description='' />
        <ProjectCards
          src='/Space Portfolio Assets/CardImage.png'
          title='Modern Next.js Portfolio'
          description='' />
        <ProjectCards
          src='/Space Portfolio Assets/CardImage.png'
          title='Modern Next.js Portfolio'
          description='' />
      </div>

    </div>
  )
}

export default Projects