"use client";
import styles from "./page.module.css";

import { useRef } from "react";

import { useInView, motion } from "framer-motion";

const phrases = [
  "Our mission is simple: ",
  "to fuel the wardrobe of car enthusiasts with gear ",
  "that's as stylish as it is meaningful.",
  "Through our apparel,",
  "we connect a community of people who share a deep appreciation for cars and the stories they tell.",
  "Join us on this journey at PRIX,", 
  "where your passion for cars meets your sense of style.",
  "Get ready to gear up and stand out with apparel that drives the spirit of",
  "innovation and adventure."
];

export function MaskText() {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "-75%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={body} className={styles.body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={styles.lineMask}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
