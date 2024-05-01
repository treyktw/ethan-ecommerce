'use client'

import React, { ReactHTMLElement } from 'react'
import styles from './page.module.css';
import Link from 'next/link';

type Props = {
  index: any
  title: string
  setModel: any
}

const pages = [
  {
    title: "About Us",
    href: "about",
    key: "aboutus"
  },
  {
    title: "Shop",
    href: "shop",
    key: "aboutus"
  },
  {
    title: "Our Mission",
    href: "mission",
    key: "aboutus"
  }
]

const Projects = ({
  index, 
  title,
  setModel
}: Props) => {
  return (
    <div onMouseEnter={() => {setModel({active: true, index})}} onMouseLeave={() => setModel({active: false, index})} className={styles.project}>
      <Link href="about" className='bg-transparent'>{title}</Link>
      
    </div>
  )
}

export default Projects

// 'use client';
// import React from 'react'
// import styles from './style.module.css';

// export default function index({index, title, setModal}) {

//     return (
//         <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
//             <h2>{title}</h2>
//             <p>Design & Development</p>
//         </div>
//     )
// }