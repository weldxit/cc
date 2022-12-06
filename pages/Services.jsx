import React from "react";
import Layout from "./Layout";
import style from "../styles/service.module.css";
import Image from "next/image";
const Service = () => {
  return (
    <Layout>
      <div className={style.service}>
        <div className={style.service_text}>
          <h1 className={style.service_text_h1}>Services</h1>
          <p className={style.service_text_p}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            distinctio deleniti adipisci doloremque nobis, commodi ratione,
            laboriosam autem accusantium exercitationem sapiente. Itaque tempore
            in ab, id voluptate eos facere quas!
          </p>
        </div>



        <div className={style.service_items}>
          <div className={style.service_card}>
            <div className={style.service_card_text}>
              <h1 className={style.service_card_h1}>
                Biofloc Farming ବାୟୋଫ୍ଲକ
              </h1>
              <p className={style.service_card_p}>
                ବାୟୋଫ୍ଲକ ଏକ ବୈଷୟିକ ମାଛ ଚାଷ ପ୍ରଣାଳୀ । ଉପଯୁକ୍ତ ଜ୍ଞାନକୌଶଳ ଦ୍ୱାରା
                ମାଛଚାଷରେ ନିଶ୍ଚିତ ଲାଭ ମିଳିଥାଏ । ଚାଷୀକେୟାର ଏକମାତ୍ର କମ୍ପାନୀ ଯିଏ
                ଭାରତର ଅତ୍ୟାଧୂନିକ ଜ୍ଞାନକୌଶଳ ପ୍ରୟୋଗ କରୁଛି । ସ୍ୱତନ୍ତ୍ର ଜ୍ଞାନକୌଶଳରେ
                ଟାଙ୍କି ତିଆରି ଠାରୁ ତାହାର ପ୍ରସ୍ତୁତି, ଫ୍ଲକ ପ୍ରସ୍ତୁତ, ପାଣି ପରିଚାଳନା,
                ମାଛ ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷା ଓ ମାଛ ବିକ୍ରିରେ ସହାୟତା କରିଥାଏ । ବାୟୋଫ୍ଲକ
                ପାଇଁ ପ୍ରଶିକ୍ଷଣ ମଧ୍ୟ ଦେଉଛି । ବାୟୋଫ୍ଲକ ନାମରେ କିଛି ବ୍ୟକ୍ତି/ସଂସ୍ଥା
                ବିଭିନ୍ନ ପ୍ରଲୋଭନ ଦେଖାଇ ଶସ୍ତାରେ ଟାଙ୍କି ତିଆରି କରିଦେଉଛନ୍ତି ।
                ଚାଷୀଭାଇମାନେ ତାହା ଉପରେ ଭରସା କରି ଠକାମୀର ଶୀକାର ହେଉଛନ୍ତି ।
                ଯାହାଦ୍ୱାରା ବାୟୋଫ୍ଲକ ଭଳି ଏକ ଉନ୍ନତ ପ୍ରଣାଳୀ ବିଫଳ ହେଉଥିବା ଭାବଧାରା
                ସୃଷ୍ଟି ହେଉଛି । ତେଣୁ ଚାଷୀଭାଇମାନେ ଚାଷୀକେୟାର ଠାରୁ ଉପଯୁକ୍ତ ପରାମର୍ଶ
                ନିଅନ୍ତୁ ଓ ଲାଭ ପାଆନ୍ତୁ ।
              </p>
            </div>
            <div className={style.service_card_image}>
              <Image src={"/bf.jpg"} layout="fill" alt="faj" />
            </div>
          </div>

          <div className={style.service_card}>
            <div className={style.service_card_text}>
              <h1 className={style.service_card_h1}>
                Biofloc Farming ବାୟୋଫ୍ଲକ
              </h1>
              <p className={style.service_card_p}>
                ବାୟୋଫ୍ଲକ ଏକ ବୈଷୟିକ ମାଛ ଚାଷ ପ୍ରଣାଳୀ । ଉପଯୁକ୍ତ ଜ୍ଞାନକୌଶଳ ଦ୍ୱାରା
                ମାଛଚାଷରେ ନିଶ୍ଚିତ ଲାଭ ମିଳିଥାଏ । ଚାଷୀକେୟାର ଏକମାତ୍ର କମ୍ପାନୀ ଯିଏ
                ଭାରତର ଅତ୍ୟାଧୂନିକ ଜ୍ଞାନକୌଶଳ ପ୍ରୟୋଗ କରୁଛି । ସ୍ୱତନ୍ତ୍ର ଜ୍ଞାନକୌଶଳରେ
                ଟାଙ୍କି ତିଆରି ଠାରୁ ତାହାର ପ୍ରସ୍ତୁତି, ଫ୍ଲକ ପ୍ରସ୍ତୁତ, ପାଣି ପରିଚାଳନା,
                ମାଛ ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷା ଓ ମାଛ ବିକ୍ରିରେ ସହାୟତା କରିଥାଏ । ବାୟୋଫ୍ଲକ
                ପାଇଁ ପ୍ରଶିକ୍ଷଣ ମଧ୍ୟ ଦେଉଛି । ବାୟୋଫ୍ଲକ ନାମରେ କିଛି ବ୍ୟକ୍ତି/ସଂସ୍ଥା
                ବିଭିନ୍ନ ପ୍ରଲୋଭନ ଦେଖାଇ ଶସ୍ତାରେ ଟାଙ୍କି ତିଆରି କରିଦେଉଛନ୍ତି ।
                ଚାଷୀଭାଇମାନେ ତାହା ଉପରେ ଭରସା କରି ଠକାମୀର ଶୀକାର ହେଉଛନ୍ତି ।
                ଯାହାଦ୍ୱାରା ବାୟୋଫ୍ଲକ ଭଳି ଏକ ଉନ୍ନତ ପ୍ରଣାଳୀ ବିଫଳ ହେଉଥିବା ଭାବଧାରା
                ସୃଷ୍ଟି ହେଉଛି । ତେଣୁ ଚାଷୀଭାଇମାନେ ଚାଷୀକେୟାର ଠାରୁ ଉପଯୁକ୍ତ ପରାମର୍ଶ
                ନିଅନ୍ତୁ ଓ ଲାଭ ପାଆନ୍ତୁ ।
              </p>
            </div>
            <div className={style.service_card_image}>
              <Image src={"/bf.jpg"} layout="fill" alt="faj" />
            </div>
          </div>

          <div className={style.service_card}>
            <div className={style.service_card_text}>
              <h1 className={style.service_card_h1}>
                Biofloc Farming ବାୟୋଫ୍ଲକ
              </h1>
              <p className={style.service_card_p}>
                ବାୟୋଫ୍ଲକ ଏକ ବୈଷୟିକ ମାଛ ଚାଷ ପ୍ରଣାଳୀ । ଉପଯୁକ୍ତ ଜ୍ଞାନକୌଶଳ ଦ୍ୱାରା
                ମାଛଚାଷରେ ନିଶ୍ଚିତ ଲାଭ ମିଳିଥାଏ । ଚାଷୀକେୟାର ଏକମାତ୍ର କମ୍ପାନୀ ଯିଏ
                ଭାରତର ଅତ୍ୟାଧୂନିକ ଜ୍ଞାନକୌଶଳ ପ୍ରୟୋଗ କରୁଛି । ସ୍ୱତନ୍ତ୍ର ଜ୍ଞାନକୌଶଳରେ
                ଟାଙ୍କି ତିଆରି ଠାରୁ ତାହାର ପ୍ରସ୍ତୁତି, ଫ୍ଲକ ପ୍ରସ୍ତୁତ, ପାଣି ପରିଚାଳନା,
                ମାଛ ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷା ଓ ମାଛ ବିକ୍ରିରେ ସହାୟତା କରିଥାଏ । ବାୟୋଫ୍ଲକ
                ପାଇଁ ପ୍ରଶିକ୍ଷଣ ମଧ୍ୟ ଦେଉଛି । ବାୟୋଫ୍ଲକ ନାମରେ କିଛି ବ୍ୟକ୍ତି/ସଂସ୍ଥା
                ବିଭିନ୍ନ ପ୍ରଲୋଭନ ଦେଖାଇ ଶସ୍ତାରେ ଟାଙ୍କି ତିଆରି କରିଦେଉଛନ୍ତି ।
                ଚାଷୀଭାଇମାନେ ତାହା ଉପରେ ଭରସା କରି ଠକାମୀର ଶୀକାର ହେଉଛନ୍ତି ।
                ଯାହାଦ୍ୱାରା ବାୟୋଫ୍ଲକ ଭଳି ଏକ ଉନ୍ନତ ପ୍ରଣାଳୀ ବିଫଳ ହେଉଥିବା ଭାବଧାରା
                ସୃଷ୍ଟି ହେଉଛି । ତେଣୁ ଚାଷୀଭାଇମାନେ ଚାଷୀକେୟାର ଠାରୁ ଉପଯୁକ୍ତ ପରାମର୍ଶ
                ନିଅନ୍ତୁ ଓ ଲାଭ ପାଆନ୍ତୁ ।
              </p>
            </div>
            <div className={style.service_card_image}>
              <Image src={"/bf.jpg"} layout="fill" alt="faj" />
            </div>
          </div>

          <div className={style.service_card}>
            <div className={style.service_card_text}>
              <h1 className={style.service_card_h1}>
                Biofloc Farming ବାୟୋଫ୍ଲକ
              </h1>
              <p className={style.service_card_p}>
                ବାୟୋଫ୍ଲକ ଏକ ବୈଷୟିକ ମାଛ ଚାଷ ପ୍ରଣାଳୀ । ଉପଯୁକ୍ତ ଜ୍ଞାନକୌଶଳ ଦ୍ୱାରା
                ମାଛଚାଷରେ ନିଶ୍ଚିତ ଲାଭ ମିଳିଥାଏ । ଚାଷୀକେୟାର ଏକମାତ୍ର କମ୍ପାନୀ ଯିଏ
                ଭାରତର ଅତ୍ୟାଧୂନିକ ଜ୍ଞାନକୌଶଳ ପ୍ରୟୋଗ କରୁଛି । ସ୍ୱତନ୍ତ୍ର ଜ୍ଞାନକୌଶଳରେ
                ଟାଙ୍କି ତିଆରି ଠାରୁ ତାହାର ପ୍ରସ୍ତୁତି, ଫ୍ଲକ ପ୍ରସ୍ତୁତ, ପାଣି ପରିଚାଳନା,
                ମାଛ ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷା ଓ ମାଛ ବିକ୍ରିରେ ସହାୟତା କରିଥାଏ । ବାୟୋଫ୍ଲକ
                ପାଇଁ ପ୍ରଶିକ୍ଷଣ ମଧ୍ୟ ଦେଉଛି । ବାୟୋଫ୍ଲକ ନାମରେ କିଛି ବ୍ୟକ୍ତି/ସଂସ୍ଥା
                ବିଭିନ୍ନ ପ୍ରଲୋଭନ ଦେଖାଇ ଶସ୍ତାରେ ଟାଙ୍କି ତିଆରି କରିଦେଉଛନ୍ତି ।
                ଚାଷୀଭାଇମାନେ ତାହା ଉପରେ ଭରସା କରି ଠକାମୀର ଶୀକାର ହେଉଛନ୍ତି ।
                ଯାହାଦ୍ୱାରା ବାୟୋଫ୍ଲକ ଭଳି ଏକ ଉନ୍ନତ ପ୍ରଣାଳୀ ବିଫଳ ହେଉଥିବା ଭାବଧାରା
                ସୃଷ୍ଟି ହେଉଛି । ତେଣୁ ଚାଷୀଭାଇମାନେ ଚାଷୀକେୟାର ଠାରୁ ଉପଯୁକ୍ତ ପରାମର୍ଶ
                ନିଅନ୍ତୁ ଓ ଲାଭ ପାଆନ୍ତୁ ।
              </p>
            </div>
            <div className={style.service_card_image}>
              <Image src={"/bf.jpg"} layout="fill" alt="faj" />
            </div>
          </div>

          <div className={style.service_card}>
            <div className={style.service_card_text}>
              <h1 className={style.service_card_h1}>
                Biofloc Farming ବାୟୋଫ୍ଲକ
              </h1>
              <p className={style.service_card_p}>
                ବାୟୋଫ୍ଲକ ଏକ ବୈଷୟିକ ମାଛ ଚାଷ ପ୍ରଣାଳୀ । ଉପଯୁକ୍ତ ଜ୍ଞାନକୌଶଳ ଦ୍ୱାରା
                ମାଛଚାଷରେ ନିଶ୍ଚିତ ଲାଭ ମିଳିଥାଏ । ଚାଷୀକେୟାର ଏକମାତ୍ର କମ୍ପାନୀ ଯିଏ
                ଭାରତର ଅତ୍ୟାଧୂନିକ ଜ୍ଞାନକୌଶଳ ପ୍ରୟୋଗ କରୁଛି । ସ୍ୱତନ୍ତ୍ର ଜ୍ଞାନକୌଶଳରେ
                ଟାଙ୍କି ତିଆରି ଠାରୁ ତାହାର ପ୍ରସ୍ତୁତି, ଫ୍ଲକ ପ୍ରସ୍ତୁତ, ପାଣି ପରିଚାଳନା,
                ମାଛ ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷା ଓ ମାଛ ବିକ୍ରିରେ ସହାୟତା କରିଥାଏ । ବାୟୋଫ୍ଲକ
                ପାଇଁ ପ୍ରଶିକ୍ଷଣ ମଧ୍ୟ ଦେଉଛି । ବାୟୋଫ୍ଲକ ନାମରେ କିଛି ବ୍ୟକ୍ତି/ସଂସ୍ଥା
                ବିଭିନ୍ନ ପ୍ରଲୋଭନ ଦେଖାଇ ଶସ୍ତାରେ ଟାଙ୍କି ତିଆରି କରିଦେଉଛନ୍ତି ।
                ଚାଷୀଭାଇମାନେ ତାହା ଉପରେ ଭରସା କରି ଠକାମୀର ଶୀକାର ହେଉଛନ୍ତି ।
                ଯାହାଦ୍ୱାରା ବାୟୋଫ୍ଲକ ଭଳି ଏକ ଉନ୍ନତ ପ୍ରଣାଳୀ ବିଫଳ ହେଉଥିବା ଭାବଧାରା
                ସୃଷ୍ଟି ହେଉଛି । ତେଣୁ ଚାଷୀଭାଇମାନେ ଚାଷୀକେୟାର ଠାରୁ ଉପଯୁକ୍ତ ପରାମର୍ଶ
                ନିଅନ୍ତୁ ଓ ଲାଭ ପାଆନ୍ତୁ ।
              </p>
            </div>
            <div className={style.service_card_image}>
              <Image src={"/bf.jpg"} layout="fill" alt="faj" />
            </div>
          </div>

          <div className={style.service_card}>
            <div className={style.service_card_text}>
              <h1 className={style.service_card_h1}>
                Biofloc Farming ବାୟୋଫ୍ଲକ
              </h1>
              <p className={style.service_card_p}>
                ବାୟୋଫ୍ଲକ ଏକ ବୈଷୟିକ ମାଛ ଚାଷ ପ୍ରଣାଳୀ । ଉପଯୁକ୍ତ ଜ୍ଞାନକୌଶଳ ଦ୍ୱାରା
                ମାଛଚାଷରେ ନିଶ୍ଚିତ ଲାଭ ମିଳିଥାଏ । ଚାଷୀକେୟାର ଏକମାତ୍ର କମ୍ପାନୀ ଯିଏ
                ଭାରତର ଅତ୍ୟାଧୂନିକ ଜ୍ଞାନକୌଶଳ ପ୍ରୟୋଗ କରୁଛି । ସ୍ୱତନ୍ତ୍ର ଜ୍ଞାନକୌଶଳରେ
                ଟାଙ୍କି ତିଆରି ଠାରୁ ତାହାର ପ୍ରସ୍ତୁତି, ଫ୍ଲକ ପ୍ରସ୍ତୁତ, ପାଣି ପରିଚାଳନା,
                ମାଛ ସ୍ୱାସ୍ଥ୍ୟ ପରୀକ୍ଷା ଓ ମାଛ ବିକ୍ରିରେ ସହାୟତା କରିଥାଏ । ବାୟୋଫ୍ଲକ
                ପାଇଁ ପ୍ରଶିକ୍ଷଣ ମଧ୍ୟ ଦେଉଛି । ବାୟୋଫ୍ଲକ ନାମରେ କିଛି ବ୍ୟକ୍ତି/ସଂସ୍ଥା
                ବିଭିନ୍ନ ପ୍ରଲୋଭନ ଦେଖାଇ ଶସ୍ତାରେ ଟାଙ୍କି ତିଆରି କରିଦେଉଛନ୍ତି ।
                ଚାଷୀଭାଇମାନେ ତାହା ଉପରେ ଭରସା କରି ଠକାମୀର ଶୀକାର ହେଉଛନ୍ତି ।
                ଯାହାଦ୍ୱାରା ବାୟୋଫ୍ଲକ ଭଳି ଏକ ଉନ୍ନତ ପ୍ରଣାଳୀ ବିଫଳ ହେଉଥିବା ଭାବଧାରା
                ସୃଷ୍ଟି ହେଉଛି । ତେଣୁ ଚାଷୀଭାଇମାନେ ଚାଷୀକେୟାର ଠାରୁ ଉପଯୁକ୍ତ ପରାମର୍ଶ
                ନିଅନ୍ତୁ ଓ ଲାଭ ପାଆନ୍ତୁ ।
              </p>
            </div>
            <div className={style.service_card_image}>
              <Image src={"/bf.jpg"} layout="fill" alt="faj" />
            </div>
          </div>

          
        </div>



      </div>
    </Layout>
  );
};

export default Service;
