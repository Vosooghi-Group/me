"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'

const services = [
     {
          num: "01",
          title: "Web Development",
          description: "Building fast and scalable websites.",
     },
     {
          num: "02",
          title: "Web Design",
          description: "Creating modern and user-friendly designs.",
     },
     {
          num: "03",
          title: "SEO",
          description: "Optimizing websites for better rankings.",
     },
     {
          num: "04",
          title: "UI Design",
          description: "Designing intuitive and engaging interfaces.",
     },
];
const Services = () => {
     return (
          <section className='min-h-[80vh] flex flex-col justi
          fy-center py-12 xl:py-0'>
               <div className="container mx-auto">
                    <h1 className='my-10 xl:mt-[80px] text-3xl'>Services</h1>
                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{
                              opacity: 1,
                              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                         }}
                         className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                    >
                         {services.map((service, index) => {
                              return <div className="flex flex-1 flex-col justify-center gap-6 group" key={index}>
                                   <div className="w-full flex items-center justify-between">
                                        <div className='text-5xl font-medium'>{service.num}</div>
                                        <div className='w-[50px] h-[50px] bg-white rounded-full hover:bg-blue-500 transition-all flex items-center justify-center text-black hover:-rotate-45 cursor-pointer'>
                                             <BsArrowDownRight />
                                        </div>
                                   </div>
                                   <h2 className='text-[35px] font-medium text-white '>{service.title}</h2>
                                   <p className='text-white/60'>{service.description}</p>
                                   <div className="border-b border-white/20 w-full"></div>
                              </div>
                         })}
                    </motion.div>
               </div>
          </section>
     )
}

export default Services