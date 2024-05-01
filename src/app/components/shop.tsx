import React from 'react'

type Props = {}

const Shop = (props: Props) => {
  return (
<div className="w-[1920px] h-[1080px] relative bg-white">
  <div className="left-[156px] top-[120px] absolute text-center text-black text-5xl font-normal font-['Keania One']">Our Products</div>
  <div className="left-[1678px] top-[143px] absolute text-center text-black text-2xl font-normal font-['Keania One'] underline">View All</div>
  <div className="w-[1608px] left-[156px] top-[282px] absolute justify-start items-start gap-[251px] inline-flex">
    <div className="w-[369px] h-[599px] relative">
      <div className="w-[182px] left-0 top-[555px] absolute text-center text-black text-4xl font-normal font-['Keania One']">Men&apos;s Shirt</div>
      <div className="w-[369px] h-[515px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
      <div className="left-[4px] top-[526px] absolute text-center text-zinc-400 text-sm font-normal font-['Keania One']">Prix Pro Men&apos;s Shirt</div>
      <div className="w-[60px] left-[309px] top-[562px] absolute text-center text-black text-2xl font-normal font-['Keania One']">$20</div>
    </div>
    <div className="w-[369px] h-[599px] relative">
      <div className="w-[182px] left-0 top-[555px] absolute text-center text-black text-4xl font-normal font-['Keania One']">Men&apos;s Shirt</div>
      <div className="w-[369px] h-[515px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
      <div className="left-[4px] top-[526px] absolute text-center text-zinc-400 text-sm font-normal font-['Keania One']">Prix Pro Men&apos;s Shirt</div>
      <div className="w-[60px] left-[309px] top-[562px] absolute text-center text-black text-2xl font-normal font-['Keania One']">$20</div>
    </div>
    <div className="w-[369px] h-[599px] relative">
      <div className="w-[182px] left-0 top-[555px] absolute text-center text-black text-4xl font-normal font-['Keania One']">Men&apos;s Shirt</div>
      <div className="w-[369px] h-[515px] left-0 top-0 absolute bg-zinc-300 rounded-[30px]" />
      <div className="left-[4px] top-[526px] absolute text-center text-zinc-400 text-sm font-normal font-['Keania One']">Prix Pro Men&apos;s Shirt</div>
      <div className="w-[60px] left-[309px] top-[562px] absolute text-center text-black text-2xl font-normal font-[&apos;Keania One&apos;]">$20</div>
    </div>
  </div>
</div>
  )
}

export default Shop