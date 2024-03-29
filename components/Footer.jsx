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
        <Link href={'/'}><Image src={'/whitclour.png'} width={200} height={50} alt="Chasicare Odisha"/></Link>
        </div>
        <div className={style.linksDiv}>
          <div>
            <p>SERVICES</p>
            <ul className={style.ul}>
              <li><Link href={'/chasicare-services/#bfloc'} className={style.li}><span>Biofloc Farming</span></Link></li>
              <li><Link href={'/chasicare-services/#organic'} className={style.li}><span>Organic Farming</span></Link></li>
              <li><Link href={'/chasicare-services/#dairy'} className={style.li}><span>Dairy Farming</span></Link></li>
              <li><Link href={'/chasicare-services/#goat'} className={style.li}><span>Goat Farming</span></Link></li>
              <li><Link href={'/chasicare-services/#aqua'} className={style.li}><span>Aquaponics</span></Link></li>
              <li><Link href={'/chasicare-services/#poultry'} className={style.li}><span>Poultry Farming</span></Link></li>
            </ul>
          </div>
          <div>
            <p>OUR ADDRESS</p>
            <ul className={style.ul}>
              <li># 309/1801P, Niladri Vihar</li>
              <li>BBSR, Odisha - 751021</li>
            </ul>
          </div>
          <div>
            <p style={{marginLeft: "12px"}}>CHASICARE</p>
            <ul className={style.ul}>
              <li><Link href={'/chasicare-about'} className={style.li}><span>About Us</span></Link></li>
              <li><Link href={'/chasicare-biofloc-gallery'} className={style.li}><span>Gallery</span></Link></li>
              <li><Link href={'/chasicare-site-map'} className={style.li}><span>Sitemap</span></Link></li>
              <li><Link href={'/biofloc-fish-farming-in-odisha-chasicare-blog'} className={style.li}><span>Blog</span></Link></li>
              <li><Link href={'/cahsicare-customer-support'} className={style.li}><span>Customer Support</span></Link></li>
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
      <p>© Copyright <b>ChasiCare</b> 2023. All Rights Reserved | Powered by <Link href={'https://www.weldx.io/'} className={style.li}><span>WeldX</span></Link></p>
    </div>
  )
}

export default Footer
