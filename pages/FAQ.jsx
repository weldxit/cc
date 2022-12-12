import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Layout from './Layout';
import style from "../styles/FAQ.module.css";
import Image from 'next/image';
import Head from "next/head";
import Form from "./Form";

const FAQ = () => {
    return (
        <Layout>
            <Head>
                <title>Frequently Asked Questions (FAQ) for Organic Farming – Chasicare</title>
            </Head>
            <div className={style.FAQarea}>
                <div className={style.FAQimage}>
                    <Image src={'/faq.jpg'} width={550} height={350} alt="faq" className={style.Image} about="Chasicare Odisha" />
                </div>
                <div className={style.FAQ}>
                    <div className={style.head}>
                        <h1 className={style.H}>Frequently Asked Questions (FAQ)</h1>
                        <p className={style.P}>Many <b>Chasicare</b> customers are asking the common questions for their organic farming including Biofloc, Aquaponics, Diary farming, Dairy & Goatery, Soil less farming, hydroponic farming and more. Let’s explore the most common and frequently asked questions and answers here at <b>Chasicare</b>, Odisha.</p>
                    </div>
                    <div className={style.Accordion}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Who Is <b>Chasicare</b>?</Accordion.Header>
                                <Accordion.Body>
                                    <b>Chasicare</b> is the farmers-oriented organization in Odisha committed to help people to setup up their organic farm in Biofloc, Aquaponics, Dairy & Goatery, Soil less farming, hydroponic farming and also get access to the quality training and government subsidies facilities.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What is Urban Farming and How <b>Chasicare</b> will Help?</Accordion.Header>
                                <Accordion.Body>The Urban Farming is the new practice of growing organic foods including vegetables, fruits and herbs in your own apartment/flats in the city. You can plant your favorite food and vegetable trees on the roof tops, balcony or terrace producing natural food items that are free from chemicals. At <b>Chasicare</b>, our uniqueness is to create your organic farm with very small piece of land even 30 to 40 feet…. Get in touch with our expert team today and we’ll help you from all aspects.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How <b>Chasicare</b> Will Help Me?</Accordion.Header>
                                <Accordion.Body>The expert team at <b>Chasicare</b> will deeply understand your organic farming requirements, and will assist to setup and expand it. Get high quality training, new technology and subsidies facilities available for your organic farming with Chasire care team. Call us today and our expert team will reach you to discuss more.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How to Contact <b>Chasicare</b></Accordion.Header>
                                <Accordion.Body>You can reach <b>Chasicare</b> team with the website or call, 09777028888 for more details. Also get connect with us in Facebook, YouTube Instagram, LinkedIn etc.. for more updates.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>What is BioFlo Fish Farming, and How <b>Chasicare</b> will help?</Accordion.Header>
                                <Accordion.Body>Bio-floc based farming system is a new technology for promotion of intensive fish/ shrimp production in a limited area without significantly increasing the usage of the basic natural resources of water and land. The <b>Chasicare</b> team will help to create your Biofloc fish farming and educate you with quality training, new Biofloc technology and more. Also, the <b>Chasicare</b> team will help for the Government subsidies facilities available in Odisha.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Where <b>Chasicare</b> is Located in Odisha?</Accordion.Header>
                                <Accordion.Body>The <b>Chasicare</b> team is working all over the Odisha, and its head office located at Bhubaneswar. Visit our website Contact us page for more details.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>What Documents Required for the Organic Farming including Biofloc fish farming, Aquaponics, Dairy & Goatery Farming Subsidies?</Accordion.Header>
                                <Accordion.Body>The expert team at <b>Chasicare</b> will guide you for the required documents for your organic farming in Odisha. Call <b>Chasicare</b> team today and we’ll help you for the documents required on Biofloc, Aquaponics, Dairy & Goatery training and subsidies facilities in Odisha. Lets talk with our Chaisicare expert team today.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Is <b>Chasicare</b> a Government Organization?</Accordion.Header>
                                <Accordion.Body>The <b>Chasicare</b> is a farmers oriented organization committed to give the best training, technologies and subsidies facilities available in government of Odisha and government of India.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header>Is <b>Chasicare</b> Charging Fees for Training?</Accordion.Header>
                                <Accordion.Body>At <b>Chasicare</b>, we are committed to provide the best training, technology and subsidies facilities available for the Organic farming to the people of Odisha, and the training charges depends upon various factors. Let’s talk with <b>Chasicare</b> team today for the pricing details.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header>How Much Subsidies I’ll Get for Biofloc and Other Organic Farming?</Accordion.Header>
                                <Accordion.Body>The central government and the government of Odisha is providing the subsidies to people to setup and expand their organic farming including Biofloc, and other agriculture allied sectors. The subsides amount for the organic farming depends upon the various factors and government guidelines. Call us today, and our expert team at <b>Chasicare</b> will provide you more details.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10">
                                <Accordion.Header>Can I start Organic Farming into My Home/Garden/Flats/Apartments?</Accordion.Header>
                                <Accordion.Body>Yes, you can start your organic farming in to your flats, apartments or any open space areas. The <b>Chasicare</b> team is always stand with people and expand their organic farming business in Odisha.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="11">
                                <Accordion.Header>When the <b>Chasicare</b> Started it’s Operation?</Accordion.Header>
                                <Accordion.Body>The <b>Chasicare</b> has decade of experience operating in Odisha and helping urban and rural people to set up their organic farming business. Start urban farming today with the help of <b>Chasicare</b> expert team.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="12">
                                <Accordion.Header>Is <b>Chasicare</b> Operating in All Districts of Odisha?</Accordion.Header>
                                <Accordion.Body>Yes, <b>Chasicare</b> team members are working all districts of the Odisha and helping people for their organic farming business including Biofloc, Aquaponics, Dairy and Goatery with quality training and Government subsidies.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div>
                <Form />
            </div>
        </Layout>
    )
}

export default FAQ
