import Link from "next/link";
import { Button } from "./ui/button";


const Header = () => {
  return <header className="py-8 xl:py-12 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link href='/' ><h1 className="text-4xl font-normal">Vosooghi <span className=" ml-[-7px] text-blue-500">.</span></h1></Link>
      <div className="flex items-center gap-8">
        <Link href='/#contact'>
          <Button className="bg-zinc-800">
            hire me
          </Button>
        </Link>
      </div>
    </div>
  </header>;
};
export default Header; 
