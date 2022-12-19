import React from 'react'
import style from "../styles/AllServices.module.css";
import Image from "next/image";
import Link from "next/link";

const AllServices = () => {
  return (
    <div className={style.Business}>
            <div className={style.Heading}>
                <h1 className={style.H}>CHASICARE Services</h1>
            </div>
            <div className={style.prods}>
                <div className={style.Prod}>
                <Link href={'/chasicare-services/#bfloc'}><Image className={style.pImg} src={'/icon1.png'} width={100} height={100} alt="Chasicare Odisha"/></Link>
                    <h2 className={style.name}>Biofloc Farming</h2>
                    <p className={style.des}>ବାୟୋଫ୍ଲକ ଏକ ବୈଷୟିକ ମାଛ ଚାଷ ପ୍ରଣାଳୀ । ଉପଯୁକ୍ତ ଜ୍ଞାନକୌଶଳ ଦ୍ୱାରା ମାଛଚାଷରେ ନିଶ୍ଚିତ ଲାଭ ମିଳିଥାଏ । ଚାଷୀକେୟାର ଏକମାତ୍ର କମ୍ପାନୀ ଯିଏ ଭାରତର ଅତ୍ୟାଧୂନିକ ଜ୍ଞାନକୌଶଳ ପ୍ରୟୋଗ କରୁଛି । ତନ୍ତ୍ର ଜ୍ଞାନକୌଶଳରେ ଟାଙ୍କି ତିଆରି ଠାରୁ ତାହାର ପ୍ରସ୍ତୁତି, ଫ୍ଲକ ପ୍ରସ୍ତୁତ, ପାଣି ପରିଚାଳନା...<Link href={'/chasicare-services/#bfloc'}>see more</Link></p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt="Chasicare Odisha"/> */}
                </div>
                <div className={style.Prod}>
                    <Link href={'/chasicare-services/#dairy'}><Image className={style.pImg} src={'/icon2.png'} width={100} height={100} alt="Chasicare Odisha"/></Link>
                    <h2 className={style.name}>Dairy Farming</h2>
                    <p className={style.des}>ଗାଈ  ଚାଷ ଏକ ପାରମ୍ପରିକ ଚାଷ । ସମୟ ବଦଳିବା ସହ ଏହି ଚାଷରେ ଜ୍ଞାନକୌଶଳ ପ୍ରୟୋଗ ଦ୍ୱାରା ଲାଭ ନିଶ୍ଚିତ ହୋଇ ପାରିବ । ଗାଈ ଚାଷ ଅର୍ଥ କେବଳ ଜର୍ସି ବୋଲି ଭାବିବା ଉଚିତ ନୁହେଁ । ଏହା କିଛିଦିନ ପରେ ଆବଶ୍ୟକ ଲାଭ ଦେବାରେ ସମର୍ଥ ହୁଏନାହିଁ । ଦେଶୀଗାଈ ଚାଷ ଅଧିକ ଲାଭଯୁକ୍ତ...<Link href={'/chasicare-services/#dairy'}>see more</Link></p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt="Chasicare Odisha"/> */}
                </div>
                <div className={style.Prod}>
                    <Link href={'/chasicare-services/#goat'}><Image className={style.pImg} src={'/icon3.png'} width={100} height={100} alt="Chasicare Odisha"/></Link>
                    <h2 className={style.name}>Goatery Farming</h2>
                    <p className={style.des}>ଛେଳିଚାଷ ସର୍ବଦା ଲାଭଜନକ ହୋଇଥାଏ । ହେଲେ ଏହି ଚାଷକୁ ସୁ ସଂଯୋଜିତ ଭାବେ କରାଯିବା ଆବଶ୍ୟକ । ଆମ ରାଜ୍ୟରେ ଛେଳିମାଂସର ଚାହିଦା ଅଧିକ ରହିଛି । ମାଂସର ଚାହିଦା ଯେତିକି ରହିଛି, ସେହି ପରିମାଣରେ ଛେଳି ଉତ୍ପାଦନ ହେଉନାହିଁ । ଏହି ଚାଷକୁ ଚାଷୀକେୟାର ସୁସଂଯୋଜିତ ଭାବେ...<Link href={'/chasicare-services/#goat'}>see more</Link></p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt="Chasicare Odisha"/> */}
                </div>
                <div className={style.Prod}>
                    <Link href={'/chasicare-services/#poultry'}><Image className={style.pImg} src={'/icon4.png'} width={100} height={100} alt="Chasicare Odisha"/></Link>
                    <h2 className={style.name}>Poultry Farming</h2>
                    <p className={style.des}>ଚାଷୀକେୟାର ଦେଶୀ କୁକୁଡ଼ା ଚାଷକୁ ପ୍ରୋତ୍ସାହିତ କରୁଛି । ଦେଶୀ କୁକୁଡ଼ା ସ୍ୱାସ୍ଥ୍ୟକର ଓ ଲାଭଜନକ ମଧ୍ୟ । ଦେଶୀ କୁକୁଡ଼ାରେ କୌଣସି ରସାୟନ (କେମିକାଲ ହରମୋନ) ଦିଆଯାଏ ନାହିଁ । ସେଥିପାଇଁ ଦେଶୀ କୁକୁଡ଼ାର ଅଣ୍ଡା ଏବଂ ମାଂସ ଶରୀର ପାଇଁ କ୍ଷତିକାରକ ନୁହେଁ । ଏହାର ବଜାର ଚାହିଦା ବି ବେଶ ରହିଛି ।...<Link href={'/chasicare-services/#poultry'}>see more</Link></p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt="Chasicare Odisha"/> */}
                </div>
                <div className={style.Prod}>
                    <Link href={'/chasicare-services/#organic'}><Image className={style.pImg} src={'/icon5.png'} width={100} height={100} alt="Chasicare Odisha"/></Link>
                    <h2 className={style.name}>Organic Farming</h2>
                    <p className={style.des}>ଛତୁ ଚାଷ ଛତୁ ଚାଷର ଚାହିଦା ଦିନକୁ ଦିନ ବଢ଼ୁଛି । ଅନେକ ଲୋକ ସ୍ୱାସ୍ଥ୍ୟଗତ ସମସ୍ୟା ପାଇଁ ଶାକାହାରୀ ଖାଦ୍ୟ ପସନ୍ଦ କରୁଛନ୍ତି । ସେଥିପାଇଁ ଛତୁର ଚାହିଦା ବଢ଼ୁଛି । ଛତୁ କେବଳ ପ୍ରତ୍ୟେକ୍ଷ ଖାଦ୍ୟ ମଧ୍ୟରେ ସୀମିତ ନୁହେଁ । ଛତୁକୁ ଆଚାର, ବିସ୍କୁଟ, ଶୁଖିଲା ଖାଦ୍ୟ, ପ୍ରୋଟିନ ପାଉଡର ଭାବେ ମୂଲ୍ୟଯୁକ୍ତ ଖାଦ୍ୟ...<Link href={'/chasicare-services/#organic'}>see more</Link></p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt="Chasicare Odisha"/> */}
                </div>
                <div className={style.Prod}>
                    <Link href={'/chasicare-services/#aqua'}><Image className={style.pImg} src={'/icon6.png'} width={100} height={100} alt="Chasicare Odisha"/></Link>
                    <h2 className={style.name}>Aquaponics Farming</h2>
                    <p className={style.des}>ଏହା ମଧ୍ୟ ଅତ୍ୟାଧୂନିକ ଚାଷ ପ୍ରଣାଳୀ । ମାଟି ବିନା ପନିପରିବା ଓ ଫଳ ଚାଷ କରାଯାଇଥାଏ । ଏହା ମାଛ ଚାଷ ସହ ମିଳିତ ଭାବେ କରାଯାଏ । ମାଛ ଚାଷର ପାଣିକୁ ପନିପରିବା ଚାଷ ପାଇଁ ବ୍ୟବହାର କରାଯାଇଥାଏ । ପନିପରିବାରୁ ପାଣି ମାଛକୁ ଆସିଥାଏ । ଏହା ଏକ ଉନ୍ନତ ପ୍ରଣାଳୀ । ଘରେ ଥିବା ଆକ୍ୱାରିୟମ...<Link href={'/chasicare-services/#aqua'}>see more</Link></p>
                    {/* <Image className={style.pImg} src={'/plus.png'} width={200} height={200} alt="Chasicare Odisha"/> */}
                </div>
            </div>
        </div>
  )
}

export default AllServices
