import React from 'react'
import Image from 'next/image'
import style from '../styles/about.module.css'
export default function ShallowNavbar() {
  return (
    <div className={style.about}>
    <div className={style.about_text}>
      <h1 className={style.about_text_h1}>About Us</h1>
      <p className={style.about_text_p}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
        vitae. Commodi sapiente, maxime cumque placeat odit ad rerum
        voluptates. Dicta voluptate laudantium ab perferendis magni,
        voluptates assumenda ut veniam numquam.
      </p>
    </div>

    <div className={style.our_all}>
      <div className={style.our_all_card}>
        <h1 className={style.our_all_card_h1}>Our Mission</h1>
        <Image src={"/bf.jpg"} height={300} width={340} alt="jj" />
        <p className={style.our_all_card_p}>
          With our expert team members we are helping many urban and rural
          people to start their organic business with ease. Our mission is
          to train people and provide assistance for increasing farming
          through quality productivity and meet the growing demand.Assisting
          farmers to get new agriculture technology and subsidies from the
          Central and State Government.
        </p>
      </div>

      <div className={style.our_all_card}>
        <h1 className={style.our_all_card_h1}>Our Plan</h1>
        <Image src={"/bf.jpg"} height={300} width={340} alt="jj" />
        <p className={style.our_all_card_p}>
          To aware farmers about Agricultural Schemes and Subsides available
          by the govts. Help urban and rural people to establish their
          organic farm, train them for Biofloc farming, Diary Farming,
          Aquaponics, Goatery Farming, Organic Farming etc. Help farmers of
          Odisha to start their new agricultural business and augment their
          employment and income opportunities..
        </p>
      </div>

      <div className={style.our_all_card}>
        <h1 className={style.our_all_card_h1}>Our Vision</h1>
        <Image src={"/bf.jpg"} height={300} width={340} alt="jj" />
        <p className={style.our_all_card_p}>
          We are committed to enhance the socioeconomic conditions of the
          farmers. Our aim is to help every youth and women self-employed by
          making them Agri-entrepreneur. The Chasicare will work as a bridge
          between the government farmers and the markets. Let’s work
          together and win together in agribusiness.The care of chasi's is
          the care of nation.No food, No good.
        </p>
      </div>
    </div>
  </div>
  )
}
