"use client";
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'
import React from 'react'

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/#services"
  },
  {
    name: "resume",
    path: "/#resume"
  },
  {
    name: "work",
    path: "/#work"
  },
  {
    name: "contect",
    path: "/#contect"
  },
]

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-blue-500' />
      </SheetTrigger>
      <SheetContent className="bg-zinc-900 text-white border-none">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href='/'>
            <h1 className='text-4xl font-semibold'>Vosooghi <span className='text-blue-500'>.</span></h1>
          </Link>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link , index) => {
            return <Link href={link.path} key={index} className={`text-xl capitalize hover:text-blue-500 transition-all`}>{link.name}</Link>
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav