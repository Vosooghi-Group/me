"use client";

import React from 'react'
import { AnimatePresence, delay } from 'framer-motion'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'


 const PageTransition = ({ children }) => {
     const pathname = usePathname();
     return (
          <AnimatePresence>
               <div className="" key={pathname}>
                    <motion.div initial={{ opacity: 1 }} animate={{ opacity: 0, transition: { delay: 0, duration: 0.4, ease: "easeInOut" } }}
                         className="h-screen w-screen fixed bg-zinc-900 top-0 pointer-events-none"

                    />
                    {children}
               </div>
          </AnimatePresence>
     )
}

export default PageTransition