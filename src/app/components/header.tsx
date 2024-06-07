'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname()
  return (
    <div className="h-[50px] w-full flex justify-center items-center absolute text-2xl gap-10 z-10">
      <Link href={"/"} className={`${pathname === "/" ? 'text-yellow-500' : 'text-white'} text-opacity-70 cursor-pointer playfair-display`}>Home</Link>
      <Link href={"/about"} className={`${pathname === "/about"  ?  'text-yellow-500' : 'text-white'} cursor-pointer playfair-display`}>About</Link>
    </div>
  )
}