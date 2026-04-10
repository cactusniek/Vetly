import React from 'react'

import { useRef, useEffect, useState } from 'react'

import { Helmet } from 'react-helmet-async'

import useEmblaCarousel from 'embla-carousel-react'

import { Api } from '../../global/api/api'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { VideoPlaceholder, SearchBarImage, UpToDateImage, SustainableImage, StarsImage, DogImage, CatImage, CatsImage, RabbitImage } from '../../assets'

import '../../styles/global/global.scss'
import '../../styles/site/landing.scss'

import { motion } from 'motion/react'

function Landing() {
    // const [emblaRef, emblaApi] = useEmblaCarousel()

    const [emblaRef, emblaApi] = useEmblaCarousel({
        slidesToScroll: 1.5,
    })

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
    const scrollNext = () => emblaApi && emblaApi.scrollNext()

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div className="landing">
                <Header />

                <div className="container_sections">
                    <section className="section_1">
                        <div className="container_titles">
                            <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="title_mobile">
                                Actuele diergeneesmiddelen direct op uw website
                            </motion.h1>

                            <motion.h1 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="title_desktop">
                                Met actuele diergeneesmiddeleninformatie
                                <br />
                                direct op de website van uw praktijk..
                            </motion.h1>

                            <motion.h2 initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }} className="subtitle">
                                zorgt u voor overzichtelijke informatie zonder onnodig papier
                            </motion.h2>
                        </div>

                        <motion.img initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }} src={VideoPlaceholder} className="VideoPlaceholder" />

                        {/* this must scroll down to all the veterinarians that use this widget */}
                        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeIn', delay: 0.5 }} href="#" target="_blank" rel="noopener noreferrer" className="button_login">
                            Widget bekijken
                        </motion.a>
                    </section>

                    <section className="section_2">
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: 0.1 }} className="paragraph">
                            Met Vetly vinden clienten snel de juiste medicatie-informatie, terwijl dierenartsen en personeel beschikken over Vetly's krachtige zoekfunctie
                        </motion.p>

                        <div className="container_flex">
                            <h2 className="title">Alle voordelen op een rij</h2>

                            {/* misschien een NavLink van maken? */}
                            <a href="#" target="_blank" rel="noopener noreferrer" className="button_registration">
                                Registreer
                            </a>
                        </div>

                        <div className="container_cards">
                            <div className="cards_top">
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, ease: 'easeIn', delay: 0.1 }} className="card">
                                    <img alt="showcase" src={UpToDateImage} className="image_Showcase" />

                                    <h4 className="title">Altijd up-to-date</h4>

                                    <p className="paragraph">Vetly haalt continu de nieuwste gegevens op, zodat de info altijd aansluit op de meest recente CBG-informatie</p>
                                </motion.div>

                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, ease: 'easeIn', delay: 0.25 }} className="card">
                                    <img alt="showcase" src={SearchBarImage} className="image_Showcase" />

                                    <h4 className="title">Ook als je het anders schrijft</h4>

                                    <p className="paragraph">foute spelling, ontbrekende letters of merknaam-varianten: Vetly herkent het diergeneesmiddel</p>
                                </motion.div>
                            </div>

                            <div className="cards_bottom">
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, ease: 'easeIn', delay: 0.45 }} className="card">
                                    <img alt="showcase" src={SustainableImage} className="image_Showcase" />

                                    <h4 className="title">Duurzamer werken</h4>

                                    <p className="paragraph">met de widget maakt u bijsluiters digitaal beschikbaar, via een link, QR-code of direct als widget op uw eigen site</p>
                                </motion.div>

                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, ease: 'easeIn', delay: 0.2 }} className="card">
                                    <img alt="showcase" src={SustainableImage} className="image_Showcase" />

                                    <h4 className="title">Makkelijk te implementeren</h4>

                                    <p className="paragraph">De widget is gebouwd met moderne technologie en is hierdoor eenvoudig te implementeren op iedere website</p>
                                </motion.div>

                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.3, ease: 'easeIn', delay: 0.35 }} className="card">
                                    <img alt="showcase" src={StarsImage} className="image_Showcase" />

                                    <h4 className="title">Professionele uitstraling</h4>

                                    <p className="paragraph">Een eigen medicijnzoeker op de website laat zien dat de praktijk moderne, betrouwbare informatie serieus neemt</p>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    <section className="section_3">
                        <h2 className="title">Mijn dierenarts stuurde mij gewoon een linkje</h2>

                        <p className="paragraph">met een link van u heeft de client alle officiële medicijninfo bij de hand. Jij minder telefoontjes achteraf, zij minder twijfel thuis</p>

                        <div className="container_scroll" ref={emblaRef}>
                            <div className="container_flex">
                                <img alt="clients" src={CatImage} className="image_Clients" />

                                <img alt="clients" src={DogImage} className="image_Clients" />

                                <img alt="clients" src={CatsImage} className="image_Clients" />

                                <img alt="clients" src={RabbitImage} className="image_Clients" />

                                <img alt="clients" src={CatImage} className="image_Clients" />

                                <img alt="clients" src={DogImage} className="image_Clients" />

                                <img alt="clients" src={CatsImage} className="image_Clients" />

                                <img alt="clients" src={RabbitImage} className="image_Clients" />
                            </div>
                        </div>

                        <div className="container_arrows">
                            <button className="embla__prev" onClick={scrollPrev}>
                                ←
                            </button>

                            <button className="embla__next" onClick={scrollNext}>
                                →
                            </button>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Landing
