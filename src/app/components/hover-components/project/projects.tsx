'use client'

import React, { ReactHTMLElement } from 'react'
import styles from './page.module.css';

type Props = {
  index: any
  title: string
  setModel: any
}

const Projects = ({
  index, 
  title,
  setModel
}: Props) => {
  return (
    <div onMouseEnter={() => {setModel({active: true, index})}} onMouseLeave={() => setModel({active: false, index})} className={styles.project}>Projects</div>
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