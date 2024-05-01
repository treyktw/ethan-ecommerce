import React from 'react'
import { AlignLeft, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'


import { Separator } from "@/components/ui/separator"


const links = [
  {
    name: "About Us",
    key: "about us",
    href: "/about"
  },
  {
    name: "Our Mission",
    key: "mission",
    href: "/mission"

  },
  {
    name: "Shop",
    key: "shop",
    href: "shop"

  }
]

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="relative flex flex-wrap">
      <div className="flex flex-row h-[100px] justify-start items-center gap-20 p-10">
        <AlignLeft />
        {links.map((link) => (
          <div className="text-center text-black text-lg font-normal font-['Keania One']"key={link.key}>
            <Link href={link.href}>{link.name}</Link>
          </div>
        ))}
      
      </div>
      <div className="left-[906px] absolute justify-center items-start gap-2.5 inline-flex">
        <Link href="/" className="text-center text-black text-[64px] font-normal font-['Keania One']">Prix</Link>
      </div>
      <div className="w-[50px] h-[100px] left-[1800px] top-2 absolute  inline-flex ">
        <User className='w-20 h-20'/>
        <ShoppingCart className='w-20 h-20'/>
      </div>

      <Separator className='w-full'/>
    </div>
  )
}

export default Navbar