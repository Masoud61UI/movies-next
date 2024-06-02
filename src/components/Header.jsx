import Link from "next/link";
import MenuItems from "./MenuItems";
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaQuestionCircle } from "react-icons/fa";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
        <div className="flex gap-7">
            <MenuItems title="Home" address="/" Icon={AiFillHome} />
            <MenuItems title="About" address="/about" Icon={BsFillInfoCircleFill} />
            <MenuItems title="Faq" address="/faq" Icon={FaQuestionCircle } />
        </div>
        <div className="flex items-center gap-4">
          <DarkModeSwitch/>
          <Link href={'/'} className="flex gap-1 items-center">
            <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">Movie</span>
            <span className="text-xl hidden sm:inline">Web</span>
          </Link>
        </div>
    </div>
  )
}
