import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Layout from './Layout';
import style from "../styles/FAQ.module.css";
import Image from 'next/image';
import Head from "next/head";

const FAQ = () => {
    return (
        <Layout>
            <Head>
                <title>Frequently Asked Questions (FAQ) for Organic Farming – Chasicare</title>
            </Head>
            <div className={style.FAQarea}>
                <div className={style.FAQimage}>
                    <Image src={'/faq.jpg'} width={550} height={350} alt="faq" className={style.Image} />
                </div>
                <div className={style.FAQ}>
                    <div className={style.head}>
                        <h1 className={style.H}>Commonly Asked Questions</h1>
                        <p className={style.P}>Many Chasicare customers are asking the common questions for their organic farming including Biofloc, Aquaponics, Diary farming, Dairy & Goatery, Soil less farming, hydroponic farming and more. Let’s explore the most common and frequently asked questions and answers here at Chasicare, Odisha.</p>
                    </div>
                    <div className={style.Accordion}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Who Is Chasicare?</Accordion.Header>
                                <Accordion.Body>
                                Chasicare is the farmers-oriented organization in Odisha committed to help people to setup up their organic farm in Biofloc, Aquaponics, Dairy & Goatery, Soil less farming, hydroponic farming and also get access to the quality training and government subsidies facilities. 
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What is Urban Farming and How Chasicare will Help?</Accordion.Header>
                                <Accordion.Body>The Urban Farming is the new practice of growing organic foods including vegetables, fruits and herbs in your own apartment/flats in the city. You can plant your favorite food and vegetable trees on the roof tops, balcony or terrace producing natural food items that are free from chemicals. At Chasicare, our uniqueness is to create your organic farm with very small piece of land even 30 to 40 feet…. Get in touch with our expert team today and we’ll help you from all aspects.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How Chasicare Will Help Me?</Accordion.Header>
                                <Accordion.Body>The expert team at Chasicare will deeply understand your organic farming requirements, and will assist to setup and expand it. Get high quality training, new technology and subsidies facilities available for your organic farming with Chasire care team. Call us today and our expert team will reach you to discuss more.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How to Contact Chasicare</Accordion.Header>
                                <Accordion.Body>You can reach Chasicare team with the website or call, 09777028888 for more details. Also get connect with us in Facebook, YouTube Instagram, LinkedIn etc.. for more updates.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What is BioFlo Fish Farming, and How Chasicare will help?</Accordion.Header>
                                <Accordion.Body>Bio-floc based farming system is a new technology for promotion of intensive fish/ shrimp production in a limited area without significantly increasing the usage of the basic natural resources of water and land. The Chasicare team will help to create your Biofloc fish farming and educate you with quality training, new Biofloc technology and more. Also, the Chasicare team will help for the Government subsidies facilities available in Odisha.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Where Chasicare is Located in Odisha?</Accordion.Header>
                                <Accordion.Body>The Chasicare team is working all over the Odisha, and its head office located at Bhubaneswar. Visit our website Contact us page for more details.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>What Documents Required for the Organic Farming including Biofloc fish farming, Aquaponics, Dairy & Goatery Farming Subsidies?</Accordion.Header>
                                <Accordion.Body>The expert team at Chasicare will guide you for the required documents for your organic farming in Odisha. Call Chasicare team today and we’ll help you for the documents required on Biofloc, Aquaponics, Dairy & Goatery training and subsidies facilities in Odisha. Lets talk with our Chaisicare expert team today.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Is Chasicare a Government Organization?</Accordion.Header>
                                <Accordion.Body>The Chasicare is a farmers oriented organization committed to give the best training, technologies and subsidies facilities available in government of Odisha and government of India.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>Is Chasicare Charging Fees for Training?</Accordion.Header>
                                <Accordion.Body>At Chasicare, we are committed to provide the best training, technology and subsidies facilities available for the Organic farming to the people of Odisha, and the training charges depends upon various factors. Let’s talk with Chasicare team today for the pricing details.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header>How Much Subsidies I’ll Get for Biofloc and Other Organic Farming?</Accordion.Header>
                                <Accordion.Body>The central government and the government of Odisha is providing the subsidies to people to setup and expand their organic farming including Biofloc, and other agriculture allied sectors. The subsides amount for the organic farming depends upon the various factors and government guidelines. Call us today, and our expert team at Chasicare will provide you more details.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header>Can I start Organic Farming into My Home/Garden/Flats/Apartments?</Accordion.Header>
                                <Accordion.Body>Yes, you can start your organic farming in to your flats, apartments or any open space areas. The Chasicare team is always stand with people and expand their organic farming business in Odisha.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="11">
                                <Accordion.Header>When the Chasicare Started it’s Operation?</Accordion.Header>
                                <Accordion.Body>The Chasicare has decade of experience operating in Odisha and helping urban and rural people to set up their organic farming business. Start urban farming today with the help of Chasicare expert team.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="12">
                                <Accordion.Header>Is Chasicare Operating in All Districts of Odisha?</Accordion.Header>
                                <Accordion.Body>Yes, Chasicare team members are working all districts of the Odisha and helping people for their organic farming business including Biofloc, Aquaponics, Dairy and Goatery with quality training and Government subsidies.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FAQ
