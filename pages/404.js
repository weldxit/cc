import React from 'react'
import Layout from './Layout'
import Image from 'next/image';
import Link from 'next/link';
import style from "../styles/404.module.css"

const Custom404 = () => {
  return (
    <Layout>
        <div className={style.Whole}>
        <Image src={'/not.png'} width={550} height={350} alt="Chasicare Odisha" className={style.image} />
        <p>404 | Not Found</p>
        Click Here to Go to <Link href={'/'} >Chasicare</Link>
        </div>
    </Layout>
  )
}

export default Custom404