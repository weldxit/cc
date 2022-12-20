import React from 'react'
import Link from "next/link";
import Layout from './Layout';
import style from "../styles/Sitemap.module.css"

const Sitemap = () => {
    return (
        <>
            <h2 style={{textAlign: "center", marginTop: "50px"}}>Chasicare Sitemap</h2>
            <div className={style.sitemap}>
                <div className={style.map}>
                    <h4 className={style.h}>Home</h4>
                    <Link href={'/Home'}>https://www.chasicare.com/</Link>
                </div>
                <div className={style.map}>
                    <h4 className={style.h}>Services</h4>
                    <Link href={'/chasicare-services'}>https://www.chasicare.com/chasicare-services</Link>
                </div>
                <div className={style.map}>
                    <h4 className={style.h}>Gallery</h4>
                    <Link href={'/chasicare-biofloc-gallery'}>https://www.chasicare.com/chasicare-biofloc-gallery</Link>
                </div>
                <div className={style.map}>
                    <h4 className={style.h}>About Us</h4>
                    <Link href={'/chasicare-about'}>https://www.chasicare.com/chasicare-about</Link>
                </div>
                <div className={style.map}>
                    <h4 className={style.h}>Contact</h4>
                    <Link href={'/chasicare-contact-us'}>https://www.chasicare.com/chasicare-contact-us</Link>
                </div>
                <div className={style.map}>
                    <h4 className={style.h}>FAQ</h4>
                    <Link href={'/chasicare-biofloc-faq'}>https://www.chasicare.com/chasicare-biofloc-faq</Link>
                </div>
            </div>
        </>
    )
}

export default Sitemap