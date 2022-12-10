import React from "react";
import style from '../styles/miniabout.module.css'
export default function MiniAbout() {
  return (
    <div className={style.miniabout}>
      <div className={style.miniabout_cont} id={style.one}>
        <h1 className={style.miniabout_h1}>Who We Are</h1>
        <p className={style.miniabout_p}>
          CHASICARE is the leading farmers centric organisation in Odisha helping
          people to set up their organic farm including Biofoc farming, Aquaponics, Dairy
          farming, Poultry farming, Goat farming and more.
        </p>
      </div>

      <div className={style.miniabout_cont}>
        <h1 className={style.miniabout_h1}>What We Do</h1>
        <p className={style.miniabout_p}>
          At CHASICARE, we are committed to bring agricultural revolution through
          organic faming by applying new range of technologies and agricultural
          facilities. We help Odisha farmers to setup their own agriculture farm and
          expand their farming business.
        </p>
      </div>

      <div className={style.miniabout_cont}>
        <h1 className={style.miniabout_h1}>How We Do</h1>
        <p className={style.miniabout_p}>
          Having decade of experience in agriculture domain in Odisha, we use new and
          advance range of agriculture technologies and professional expertise in organic
          farming, Biofloc fish farming, aquaponics, dairy farming and more. Let’s work
          together and make changes in to Odisha agriculture sectors.
        </p>
      </div>

    </div>
  );
}
