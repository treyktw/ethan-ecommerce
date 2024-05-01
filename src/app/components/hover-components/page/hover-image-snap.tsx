'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import Projects from '../project/projects'
import Model from '../model/model'

const pages = [
  {
    title: "About Us",
    src: "",
    color: "#000000",
    key: "aboutus"
  },
  {
    title: "Shop",
    src: "",
    color: "#000000",
    key: "aboutus"
  },
  {
    title: "Our Mission",
    src: "",
    color: "#000000",
    key: "aboutus"
  }
]

type Props = {}

const HoverComponent = (props: Props) => {
  const [model, setModel] = useState({ active: false, index: 0 });

  return (
    <div className={styles.main} >
      <div className={styles.body}>
        {pages.map((pages, index) => {
          return <Projects index={index}  title={pages.title} setModel={setModel} key={index}/>
        })}
      </div>
      <Model modal={model} projects={pages}/>
      {/* <div className="left-[125px] top-[462px] absolute text-center text-black text-9xl font-normal font-['Keania One']">Our Mission</div>
      <div className="w-[504px] h-[200px] left-[16px] top-[660px] absolute text-center text-black text-9xl font-normal font-['Keania One']">Shop</div>
      <div className="w-[1720px] h-[0px] left-[80px] top-[212px] absolute border border-black"></div>
      <div className="w-[1720px] h-[0px] left-[80px] top-[430px] absolute border border-black"></div>
      <div className="w-[1720px] h-[0px] left-[80px] top-[651px] absolute border border-black"></div>
      <div className="w-[1720px] h-[0px] left-[80px] top-[872px] absolute border border-black"></div> */}
    </div>
  )
}

export default HoverComponent