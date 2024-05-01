import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="w-[1921px] h-[977px] relative">
      <div className="w-[465.67px] h-[315.92px] left-0 top-[0.04px] absolute text-center text-black text-[250px] font-normal font-['Keania One']">Prix</div>
      <div className="w-[104.18px] h-[103.92px] left-[1066px] top-[54px] absolute">
        <Plus className='w-full h-full' />
      </div>
      <div className="w-[387px] h-[316px] left-[1533.84px] top-0 absolute text-black text-[250px] font-normal font-['Keania One']">
        Pro
      </div>
      <p className="w-[376.07px] h-[120.55px] left-[1066px] top-[215px] absolute text-neutral-600 text-2xl font-normal font-['Keania One']">
        driven by a passion for the iconic Porsche brand and its unwavering commitment to performance, luxury, and style.
        </p>
      <h3 className="w-[115.64px] h-[30.14px] left-[1066px] top-[356px] absolute text-black text-2xl font-normal font-['Keania One'] underline">
        Explore &rarr;
      </h3>
        <Image src="/background.svg" width="1879" height={520} alt='background' className='rounded-tl-[30px] rounded-tr-[30px] absolute left-[19.92px] top-[447px]'/>
    </div>
  )
}

export default Hero