import { Button } from "@/components/ui/button";

import { FiDownload } from 'react-icons/fi'
import { FaReact } from "react-icons/fa6";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <section className="w-full pt-4">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="text-[45px] font-semibold max-w-[770px] mb-6 xl:text-[80px] leading-[1.1] ">Hello I`m  <span className="text-blue-500">Amir Vosooghi</span></h1>
            <p className="max-w-[500px] mb-9 text-[14px] xl:text-[16px] text-white/80">I  craft smooth and functional digital experiences, proficient in various programming languages and technologies.</p>
            <div className="flex items-center flex-col gap-5 justify-center xl:justify-between xl:flex-row ">
              <Link href='/#contact'>
                <Button className="flex items-center bg-zinc-800 py-5 px-6">
                  <span>Start Project</span>
                </Button>
              </Link>
              <div className="flex items-center gap-4 ">
                <Link href='https://t.me/vosooghi_amir' target="_blank">
                  <Button className="bg-zinc-800 flex items-center gap-1">
                    <FaTelegram />
                    <span>Telegram</span>
                  </Button>
                </Link>
                <Link href='/' >
                  <Button className="bg-zinc-800 flex items-center gap-1">
                    <IoIosCall />
                    <span>0992 666 7069</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <FaReact className="text-[240px] lg:text-[400px] text-blue-500 animate-slow-spin" />
          </div>
        </div>
      </div>
      <Stats />
      <Services />
      <Skills />
      <Contact />
    </section>
  );
}
