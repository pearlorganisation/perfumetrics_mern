import style from "./loader.module.css";
export default function Loader() {
  return (
    <div className="grid place-items-center h-[90vh]">
      <div className={style.spinner}></div>
    </div>
  );
}
