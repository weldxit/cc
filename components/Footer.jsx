import React from 'react'
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.footerSec}>
        <div className={style.brandDiv}>
        <Link href={'/Home'}><Image src={'/whitclour.png'} width={200} height={50} alt="logo"/></Link>
        </div>
        <div className={style.linksDiv}>
          <div>
            <p>SERVICES</p>
            <ul className={style.ul}>
              <li><Link href={'/Services/#bfloc'} className={style.li}><span>Biofloc Farming</span></Link></li>
              <li><Link href={'/Services/#organic'} className={style.li}><span>Organic Farming</span></Link></li>
              <li><Link href={'/Services/#dairy'} className={style.li}><span>Dairy Farming</span></Link></li>
            </ul>
          </div>
          <div>
            <p>COMPANY</p>
            <ul className={style.ul}>
              <li><Link href={'#'} className={style.li}><span>Privacy Policy</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Teams of Service</span></Link></li>
            </ul>
          </div>
          <div>
            <p>CHASICARE</p>
            <ul className={style.ul}>
              <li><Link href={'/About'} className={style.li}><span>About</span></Link></li>
              <li><Link href={'/Gallery'} className={style.li}><span>Gallery</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Sitemap</span></Link></li>
            </ul>
          </div>
        </div>
        <div className={style.mediaDiv}>
          <p>SOCIAL MEDIA</p>
          <Link href={'https://www.facebook.com/ChasiCareOdisha/'} target="_blank" className={style.li}><FontAwesomeIcon icon={faFacebook} className={style.icon}/></Link>
          <Link href={'https://twitter.com/chasicare'} target="_blank" className={style.li}><FontAwesomeIcon icon={faTwitter} className={style.icon}/></Link>
          <Link href={'https://www.instagram.com/chasicare/'} target="_blank" className={style.li}><FontAwesomeIcon icon={faInstagram} className={style.icon}/></Link>
          <Link href={'https://www.youtube.com/@chasicare'} target="_blank" className={style.li}><FontAwesomeIcon icon={faYoutube} className={style.icon}/></Link>
        </div>
      </div>
      <hr className={style.hr} />
      <p>© Copyright ChasiCare 2023. All Rights Reserved | Powered by <Link href={'#'} className={style.li}><span>WeldX</span></Link></p>
    </div>
  )
}

export default Footer
