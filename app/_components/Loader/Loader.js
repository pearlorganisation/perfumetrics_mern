"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import style from "./loader.module.css";
export default function Loader() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional for smooth scrolling
    });
  }, []);
  return (
    <div className="grid place-items-center h-screen ">
      <div className={style.spinner}></div>
    </div>
  );
}
