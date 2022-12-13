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
                    <Link href={'/Services'}>https://www.chasicare.com/Services</Link>
                </div>
                <div className={style.map}>
                    <h4 className={style.h}>Gallery</h4>
                    <Link href={'/Gallery'}>https://www.chasicare.com/Gallery</Link>
                </div>
                <div className={style.map}>
                    <h4 className={style.h}>About Us</h4>
                    <Link href={'/About'}>https://www.chasicare.com/About</Link>
                </div>
                <div className={style.map}>
                    <h4 className={style.h}>Contact</h4>
                    <Link href={'/Contact'}>https://www.chasicare.com/Contact</Link>
                </div>
                <div className={style.map}>
                    <h4 className={style.h}>FAQ</h4>
                    <Link href={'/FAQ'}>https://www.chasicare.com/FAQ</Link>
                </div>
            </div>
        </>
    )
}

export default Sitemap