import React from 'react'
import { AlignLeft, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'


const links = [
  {
    name: "About Us",
    key: "about us",
    href: ""
  },
  {
    name: "Our Mission",
    key: "about us",
    href: ""

  },
  {
    name: "Shop",
    key: "about us",
    href: ""

  }
]

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="relative flex flex-wrap">
      <div className="flex flex-row h-[100px] justify-start items-center gap-20 ">
        <AlignLeft />
        {links.map((link) => (
          <div className="text-center text-black text-lg font-normal font-['Keania One']"key={link.key}>
            <Link href={link.href}>{link.name}</Link>
          </div>
        ))}
      
      </div>
      <div className="left-[906px] absolute justify-center items-start gap-2.5 inline-flex">
        <h1 className="text-center text-black text-[64px] font-normal font-['Keania One']">Prix</h1>
      </div>
      <div className="w-[50px] h-[100px] left-[1800px] top-2 absolute  inline-flex ">
        <User className='w-20 h-20'/>
        <ShoppingCart className='w-20 h-20'/>
      </div>

      <div className="w-[1869px] h-[0px] left-[21px] top-[100px] absolute border-2 border-neutral-100"></div>
    </div>
  )
}

export default Navbar