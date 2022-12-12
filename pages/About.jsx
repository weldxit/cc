import React, { Component } from "react";
import Layout from "./Layout";
import style from "../styles/about.module.css";
import Image from "next/image";
import Head from 'next/head';
import Script from 'next/script'
import Form from "./Form";
export default function About() {
  return (
    <Layout>
      <Head key={'about'}>
        <meta charSet="utf-8" />
        <title>About Chasicare - Organic Farming and Biofloc Training in Odisha</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Chasicare provides organic farming and Biofloc fish farming training and facilities to Odisha farmers with new technologies." />
        <meta name="keywords" content="organic farming, Biofloc fish farming, organic farming in Odisha, Biofloc training,Diary farming in Odisha" />
        <link rel="canonical" href="https://chasicare.com/about-us/" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="MevSFHM1V4DhgIRgi52UBY8C4NQPNRIxg8WBRngWO1w" />
        <meta name="copyright" content="Chasicare" />
        <meta name="owner" content="Chasicare" />
        <meta name="category" content="Agriculture and Farming" />
        <meta name="coverage" content="India" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="General" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Chasicare - Organic Farming and Biofloc Training in Odisha" />
        <meta property="og:description" content="Chasicare provides organic farming and Biofloc fish farming training and facilities to Odisha farmers with new technologies." />
        <meta property="og:url" content="https://chasicare.com/about-us/" />
        <meta property="og:image" content="https://chasicare.com/img/chasicare/newpics/Chasicare_biofloc_odisha.jpg" />
        <meta property="og:site_name" content="Chasicare" />
        <meta property="article:modified_time" content="2022-12-10T16:01:16+00:00" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@chasicare" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="9 minute" />
        <meta name="fb:page_id" content="https://www.facebook.com/ChasiCareOdisha/" />
        <meta name="og:email" content="chasimitraindia@gmail.com" />
        <meta name="og:phone_number" content="+91 9777028888" />
        <meta name="og:latitude" content="20.296059" />
        <meta name="og:longitude" content="85.824539" />
        <meta name="og:street-address" content="Plot No: 309/1801P, Niladri Vihar" />
        <meta name="og:locality" content="Bhubaneswar" />
        <meta name="og:region" content="Odisha" />
        <meta name="og:postal-code" content="751021" />
        <meta name="og:country-name" content="India" />


        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0P9YDRCX4Y"></Script>
        {/* <Script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-0P9YDRCX4Y');
</Script> */}
        <link rel="icon" href="/img/service_icon/Chasicare-fav.png" type="image/x-icon" />


        <link href="/img/service_icon/Chasicare-fav.png" rel="icon" />

        <link href="/img/service_icon/Chasicare-fav.png" rel="apple-touch-icon" />



        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link href="https://fonts.googleapis.com/css2?family=Quintessential&display=swap" rel="stylesheet" />

        <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />



        <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />

        <link href="lib/animate/animate.min.css" rel="stylesheet" />

        <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet" />

        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />


        <link href="css/style.css" rel="stylesheet" />

        <Script type="application/ld+json">
          {{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Chasicare",
            "image": "https://chasicare.com/img/chasicare/whitclour.png",
            "@id": "https://chasicare.com/",
            "url": "https://chasicare.com/",
            "telephone": "+91 9777028888",
            "priceRange": "1"
          }},
          "address": {{
            "@type": "PostalAddress",
            "streetAddress": "Plot No: 309/1801P, Niladri Vihar",
            "addressLocality": "Bhubaneswar",
            "postalCode": "751021",
            "addressCountry": "IN"
          }},
          "geo": {{
            "@type": "GeoCoordinates",
            "latitude": 20.296059,
            "longitude": 85.824539
          }},
          "openingHoursSpecification": {{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
          }
        </Script>

      </Head>

      <div className={style.about}>
        <div className={style.about_text}>
          <h1 className={style.about_text_h1}>About Us</h1>
          <p className={style.about_text_p}>
            At <b>CHASICARE</b>, we are helping farmers to setup their organic farms and maximize their profits with the new range of agriculture technology, training and government subsidies facilities. <br /><br />
            The <b>CHASICARE</b> is a farmer centric organization that helps you to establish your own organic in various sectors including, Biofloc fish farming, Aquaponics, Dairy farming, Goatry farming, Poultry farming and more. The <b>CHASICARE</b> team also helps to set up your organic farm in the flats, rooftop, balcony or any other open spaces and keep you safe from the hazardous food infections. <br/><br/>

            <span style={{fontSize: "20px"}}>ଚାଷୀର ଉନ୍ନତି, ଦେଶର ପ୍ରଗତି!</span> <br/><br/>

            Let the <b>CHASICARE</b> expert team meet you and discuss the organic farming facilities including (Biofloc Farming, Dairy Farming, Goatery and Poultry Farming, Aquaponics Farming etc.., and help you to expand your business in your locality. We always stand with our Farmers Friend (ଚାଷୀ ଭାଇ) and will support them from all aspects. Call Us Today: <b>9777028888</b> for Any Types of Agricultural Help and We’ll Assist You!
          </p>
        </div>

        <div className={style.our_all}>
          <div className={style.our_all_card}>
            <h1 className={style.our_all_card_h1}>Our Mission</h1>
            <p className={style.our_all_card_p}>
              With our expert team members we are helping many urban and rural
              people to start their organic business with ease. Our mission is
              to train people and provide assistance for increasing farming
              through quality productivity and meet the growing demand.Assisting
              farmers to get new agriculture technology and subsidies from the
              Central and State Government.
            </p>
            <div className={style.our_all_card_images}>
              <Image src={"/a1.jpg"} height={300} width={340} alt="Chasicare Odisha" className={style.Image} />
            </div>
          </div>

          <div className={style.our_all_card}>
            <h1 className={style.our_all_card_h1}>Our Plan</h1>
            <p className={style.our_all_card_p}>
              To aware farmers about Agricultural Schemes and Subsides available
              by the govts. Help urban and rural people to establish their
              organic farm, train them for Biofloc farming, Diary Farming,
              Aquaponics, Goatery Farming, Organic Farming etc. Help farmers of
              Odisha to start their new agricultural business and augment their
              employment and income opportunities..
            </p>
            <div className={style.our_all_card_images}>
              <Image src={"/a2.jpg"} height={300} width={340} alt="Chasicare Odisha" className={style.Image} />
            </div>
          </div>

          <div className={style.our_all_card}>
            <h1 className={style.our_all_card_h1}>Our Vision</h1>
            <p className={style.our_all_card_p}>
              We are committed to enhance the socioeconomic conditions of the
              farmers. Our aim is to help every youth and women self-employed by
              making them Agri-entrepreneur. The <b>CHASICARE</b> will work as a bridge
              between the government farmers and the markets. Let’s work
              together and win together in agribusiness.The care of chasi's is
              the care of nation.No food, No good.
            </p>
            <div className={style.our_all_card_images}>
              <Image src={"/a3.jpg"} height={300} width={340} alt="Chasicare Odisha" className={style.Image} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Form />
      </div>
    </Layout>
  );
}
