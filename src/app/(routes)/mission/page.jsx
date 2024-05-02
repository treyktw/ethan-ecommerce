"use client";
import styles from "./page.module.css";
import { MaskText } from "./_components/mask-text";
import { useCallback, useEffect, useRef } from "react";

export default function Home() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;

  const targetMaskSize = 30;

  

  const animate = useCallback(() => {
    const getScrollProgress = () => {
      if (stickyMask.current && container.current) {
        const containerHeight = container.current.getBoundingClientRect().height;
        const scrollProgress =
          stickyMask.current.offsetTop / (containerHeight - window.innerHeight);
        return scrollProgress;
      }
      return 0;
    };
  
    if (stickyMask.current) {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      stickyMask.current.style.webkitMaskSize = `${
        (initialMaskSize + maskSizeProgress) * 100
      }%`;
      requestAnimationFrame(animate);
    }
  }, [targetMaskSize, initialMaskSize]);
  
  useEffect(() => {
    requestAnimationFrame(animate);
  }, [animate]);

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <video autoPlay muted loop>
            <source src="/medias/nature.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className={styles.container}>
        <MaskText />
      </div>
    </main>
  );
}
