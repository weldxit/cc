import React from "react";
import Form from "./Form";
import Layout from "./Layout";
import style from '../styles/contact.module.css'

export default function Contact() {
  return (
    <Layout>
      <div className={style.contact}>
        <div className={style.texts}>
          <h1 className={style.texts_h1}>Contact Us</h1>
          <p className={style.texts_p}>
            Contact to Chasicare Expert team by filling out the form below and
            our expert team will reach you soon. As a farmer’s centric
            organisation, the CHASICARE in Odisha is committed to help farmers
            for setting up their organic farm, biofloc fish farm, dairy farm,
            goatery farm, aquaponics and more.
          </p>
        </div>
        <div className={style.address}>
          <div className={style.address_add}></div>
          <div className={style.address_mob}></div>
          <div className={style.address_mail}></div>
        </div>

        <Form />
      </div>
    </Layout>
  );
}
