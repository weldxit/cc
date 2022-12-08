import React from "react";
import style from '../styles/miniabout.module.css'
export default function MiniAbout() {
  return (
    <div className={style.miniabout}>
        <div className={style.miniabout_cont} id={style.one}>
      <h1 className={style.miniabout_h1}>Who We Are</h1>
      <p className={style.miniabout_p}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        laborum eum eius eveniet quaerat rerum id ipsam repellat delectus
        libero, quod ipsum voluptatem beatae nesciunt a ut at saepe? Iusto.
      </p>
      </div>

      <div className={style.miniabout_cont}>
      <h1 className={style.miniabout_h1}>What We Do</h1>
      <p className={style.miniabout_p}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        laborum eum eius eveniet quaerat rerum id ipsam repellat delectus
        libero, quod ipsum voluptatem beatae nesciunt a ut at saepe? Iusto.
      </p>
      </div>

      <div className={style.miniabout_cont}>
      <h1 className={style.miniabout_h1}>How We Do</h1>
      <p className={style.miniabout_p}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
        laborum eum eius eveniet quaerat rerum id ipsam repellat delectus
        libero, quod ipsum voluptatem beatae nesciunt a ut at saepe? Iusto.
      </p>
      </div>
      
    </div>
  );
}
