import React from 'react'
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.footerSec}>
        <div className={style.brandDiv}>
          <Image src={'/whitclour.png'} width={200} height={50} />
        </div>
        <div className={style.linksDiv}>
          <div>
            <p>PRODUCT</p>
            <ul className={style.ul}>
              <li><Link href={'#'} className={style.li}><span>Features</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Integrations</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Pricing</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>FAQ</span></Link></li>
            </ul>
          </div>
          <div>
            <p>COMPANY</p>
            <ul className={style.ul}>
              <li><Link href={'#'} className={style.li}><span>Privacy</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Teams of Service</span></Link></li>
            </ul>
          </div>
          <div>
            <p>DEVELOPERS</p>
            <ul className={style.ul}>
              <li><Link href={'#'} className={style.li}><span>Public API</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Documentation</span></Link></li>
              <li><Link href={'#'} className={style.li}><span>Guides</span></Link></li>
            </ul>
          </div>
        </div>
        <div className={style.mediaDiv}>
          <p>SOCIAL MEDIA</p>
          <Link href={'#'} className={style.li}><FontAwesomeIcon icon={faFacebook} className={style.icon}/></Link>
          <Link href={'#'} className={style.li}><FontAwesomeIcon icon={faTwitter} className={style.icon}/></Link>
          <Link href={'#'} className={style.li}><FontAwesomeIcon icon={faInstagram} className={style.icon}/></Link>
        </div>
      </div>
      <hr className={style.hr} />
      <p>© Copyright ChasiCare. All Rights Reserved</p>
    </div>
  )
}

export default Footer
