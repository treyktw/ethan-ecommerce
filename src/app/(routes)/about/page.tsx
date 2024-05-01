'use client';

import React, { useRef } from 'react'
import styles from './page.module.scss'
import {

  floating1,

  floating2,

  floating3,

  floating4,

  floating5,

  floating6,

  floating7,

  floating8

} from "./_components/image_data"
import Image from 'next/image';
import gsap from 'gsap';

type Props = {
  e: any,
  start: any,
  target: any,
  amount: any,
  number: Number
}

const About = ({ e, start, target, amount, number }: Props) => {

  const plane1 = useRef(null);

  const plane2 = useRef(null);

  const plane3 = useRef(null);

  let requestAnimationFrameId: number | null = null;

  let xForce = 0;

  let yForce = 0;

  const easing = 0.08;

  const speed = 0.01;

  const manageMouseMove = (e: { movementX: any; movementY: any; }) => {

    const { movementX, movementY } = e

    xForce += movementX * speed;

    yForce += movementY * speed;



    if (requestAnimationFrameId == null) {

      requestAnimationFrameId = requestAnimationFrame(animate);

    }

  }



  const lerp = (start: number, target: number, amount: number) => start * (1 - amount) + target * amount;



  const animate = () => {

    xForce = lerp(xForce, 0, easing);

    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` })

    gsap.set(plane2.current, { x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}` })

    gsap.set(plane3.current, { x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}` })



    if (Math.abs(xForce) < 0.01) xForce = 0;

    if (Math.abs(yForce) < 0.01) yForce = 0;



    if (xForce != 0 || yForce != 0) {

      requestAnimationFrame(animate);

    }

    else {
      cancelAnimationFrame(requestAnimationFrameId as number)
      requestAnimationFrameId = null
    }

  }

  return (

    <main onMouseMove={(e) => { manageMouseMove(e) }} className={styles.main}>

      <div ref={plane1} className={styles.plane}>

        <Image

          src={floating1}

          alt='image'

          width={300}

        />

        <Image

          src={floating2}

          alt='image'

          width={300}

        />

        <Image

          src={floating7}

          alt='image'

          width={225}

        />

      </div>

      <div ref={plane2} className={styles.plane}>

        <Image

          src={floating4}

          alt='image'

          width={250}

        />

        <Image

          src={floating6}

          alt='image'

          width={200}

        />

        <Image

          src={floating8}

          alt='image'

          width={225}

        />

      </div>

      <div ref={plane3} className={styles.plane}>

        <Image

          src={floating3}

          alt='image'

          width={150}

        />

        <Image

          src={floating5}

          alt='image'

          width={200}

        />

      </div>

      <div className={styles.title}>

        <h1>Prix Pro</h1>

        <p>Founded in June 2023 by car enthusiast Ethan Pattabhi, PRIX is the go-to destination for automotive aficionados seeking to express their passion through fashion. Driven by a love for sleek design and the roar of an engine, Ethan saw an opportunity to blend stylish apparel with the world of cars, crafting clothing that speaks to those who see their vehicles as more than just transport, but as a way of life.

At PRIX, we pride ourselves on crafting high-quality garments that capture the essence of automotive culture. Our range includes everything from T-shirts and hoodies to hats and accessories, all designed with attention to detail and a nod to some of the most iconic cars in history.

What sets us apart is our commitment to authenticity and quality. Each piece in our collection is designed to reflect the precision and beauty of automotive design. We collaborate with artists and designers from the automotive community to create unique, limited edition pieces that celebrate the artistry of cars.</p>

      </div>

    </main>

  )
}

export default About