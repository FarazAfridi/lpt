'use client'
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState<string>("Home")
  return (
    <div className="h-[50px] w-full flex justify-center items-center absolute text-2xl gap-10 z-10">
      <Link onClick={() => setActive("About")} href={"/"} className={`${active === 'Home' ? 'text-yellow-500' : 'text-white'} text-opacity-70 cursor-pointer playfair-display`}>Home</Link>
      <Link onClick={() => setActive("About")} href={"/about"} className={`${active === 'About' ?  'text-yellow-500' : 'text-white'} cursor-pointer playfair-display`}>About</Link>
    </div>
  )
}