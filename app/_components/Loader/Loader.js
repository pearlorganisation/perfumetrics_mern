"use client";
import style from "./loader.module.css";
export default function Loader() {
  return (
    <div className="grid place-items-center h-screen ">
      <div className={style.spinner}></div>
    </div>
  );
}
