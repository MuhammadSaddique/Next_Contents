"use client";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  }, []);
  return (
    <main className={styles.main}>
      <div>Helloo</div>
      <div></div>
      <div></div>
    </main>
  );
}
