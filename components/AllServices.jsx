import React from 'react'
import style from "../styles/AllServices.module.css";
import Image from "next/image";
import Link from "next/link";

const AllServices = () => {
  return (
    <div className={style.Business}>
            <div className={style.Heading}>
                <h1 className={style.H}>Services Provided by Us</h1>
            </div>
            <div className={style.prods}>
                <div className={style.Prod}>
                <Link href={'/Services/#bfloc'}><Image className={style.pImg} src={'/icon.png'} width={100} height={100} alt=""/></Link>
                    <h2 className={style.name}>Biofloc Farming</h2>
                    <p className={style.des}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda obcaecati repellat omnis. Nesciunt, nostrum ipsum reiciendis magni similique provident beatae?</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Link href={'/Services/#dairy'}><Image className={style.pImg} src={'/icon.png'} width={100} height={100} alt=""/></Link>
                    <h2 className={style.name}>Dairy Farming</h2>
                    <p className={style.des}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum ea, recusandae eligendi quo natus tenetur asperiores laboriosam! Fugit, enim?</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Link href={'/Services/#goat'}><Image className={style.pImg} src={'/icon.png'} width={100} height={100} alt=""/></Link>
                    <h2 className={style.name}>Goatery Farming</h2>
                    <p className={style.des}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur modi non in omnis nihil labore unde reprehenderit magnam dolores quos.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Link href={'/Services/#poultry'}><Image className={style.pImg} src={'/icon.png'} width={100} height={100} alt=""/></Link>
                    <h2 className={style.name}>Poultry Farming</h2>
                    <p className={style.des}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum itaque cupiditate, rerum deserunt ea ipsam tenetur reiciendis esse repudiandae laudantium.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Link href={'/Services/#organic'}><Image className={style.pImg} src={'/icon.png'} width={100} height={100} alt=""/></Link>
                    <h2 className={style.name}>Organic Farming</h2>
                    <p className={style.des}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis est esse et blanditiis maxime error, officiis maiores ipsum eligendi provident.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
                <div className={style.Prod}>
                    <Link href={'/Services/#aqua'}><Image className={style.pImg} src={'/icon.png'} width={100} height={100} alt=""/></Link>
                    <h2 className={style.name}>Aquaponics Farming</h2>
                    <p className={style.des}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, debitis. Praesentium repellat veritatis sint dolor totam non laborum incidunt amet.</p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt=""/> */}
                </div>
            </div>
        </div>
  )
}

export default AllServices
