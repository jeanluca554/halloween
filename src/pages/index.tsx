import Head from 'next/head'
import { useLayoutEffect, useState, useRef, useEffect } from 'react'

import FooterContent from '../components/FooterContent';
import ShapeSmall from '../components/ShapeSmall';
import ShapeBig from '../components/ShapeBig';
import Button from '../components/Button';
import ItemCard from '../components/ItemCard';
import CategoryCard from '../components/CategoryCard';
import NavItems from '../components/NavItems';
import IconsSocialMedia from '../components/IconsSocialMedia';

import { Fade } from "react-awesome-reveal";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentSection, setCurrentSection] = useState('home');


  {/*Get the scroll position*/ }
  useEffect(() => {
    function updatePosition() {
      setScrollPosition(window.pageYOffset);

    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);

  }, []);


  {/*Scroll Sections active link*/ }
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'items', 'party'];
      let currentSection = 'home';


      sections.forEach(section => {
        const sectionEl = document.querySelector<HTMLElement>(`#${section}`);

        if (
          sectionEl !== null && sectionEl.offsetTop <= window.pageYOffset + (sectionEl.offsetHeight / 2)
        ) {
          currentSection = section;
        }
      });

      setCurrentSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Head>
        <title>Responsive halloween website</title>
        <meta name="description" content="Responsive Halloween Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon"></link>
      </Head>

      <img src="/shape-bg.png" alt="" className="shape__bg fixed w-full h-screen object-cover mix-blend-soft-light opacity-50" />

      {/*==================== HEADER ====================*/}
      <header className={`header fixed w-full top-0 left-0 z-100 transition duration-300 ${scrollPosition >= 50 ? 'bg-body-50' : 'bg-transparent'}`} id="header">
        <nav className='nav relative flex justify-between items-center  mx-6 h-14  gap-x-20 font-medium md:h-20 lg:max-w-[1024px] lg:mx-auto'>
          <a href="#" className="nav__logo flex items-center hover:text-first-50 transition ">
            <img src="/logo-skull.png" alt="logo image" className='w-5 mr-2' />
            Halloween
          </a>

          <div className={`nav__menu fixed left-0 bg-body-50 w-full shadow-xl py-14 rounded-b-3xl transition-[top] duration-300 ${isOpen ? 'top-0' : 'top-[100%]'} md:top-0 md:bg-transparent md:shadow-none md:relative md:w-auto`} id='nav-menu'>

            <ul className='nav__list flex flex-col text-center gap-6 md:flex-row md:gap-x-16 '>
              <NavItems
                currentSection={currentSection}
                section='home'
                setIsOpen={setIsOpen}
                text='Home'
              />

              <NavItems
                currentSection={currentSection}
                section='about'
                setIsOpen={setIsOpen}
                text='About Us'
              />

              <NavItems
                currentSection={currentSection}
                section='items'
                setIsOpen={setIsOpen}
                text='Items'
              />

              <NavItems
                currentSection={currentSection}
                section='party'
                setIsOpen={setIsOpen}
                text='Party'
              />

            </ul>

            {/* Close button */}
            <div className='nav__close flex text-white absolute top-4 right-6 text-base cursor-pointer md:hidden' id="nav-close" onClick={() => setIsOpen(false)}>
              <i className="ri-close-line"></i>
            </div>

            <img src="nav-bat.png" alt="nav image" className='nav__img w-44 absolute top-[40%] -left-12 md:hidden' />

          </div>

          {/* Toggle button */}
          <div className='nav__toggle flex text-white text-lg cursor-pointer md:hidden' id='nav-toggle' onClick={() => setIsOpen(true)}>
            <i className="ri-menu-4-line"></i>
          </div>

        </nav>

      </header>

      {/*==================== MAIN ====================*/}
      <main className="main">



        {/*==================== HOME ====================*/}
        <section className="home section relative mt-20 px-4 md:mt-0 md:pt-28 md:pb-6 " id="home">
          <ShapeSmall positionX='-left-12' positionY='-top-12' />
          <ShapeBig positionX='-right-40' positionY='bottom-20' />

          <div className="home__container container mx-1 grid pt-14 xs:grid-cols-[.6rf] xs:content-center xs:mx-auto">
            <Fade direction='down' duration={2500} delay={400}>
              <div className="home__data text-center font-bold">
                <h1 className="home__title relative max-[340px]:text-2xl text-4xl leading-[140%] w-max mx-auto mt-0 mb-4 md:text-6xl">
                  <span className='block font-second text-first-50 font-normal'>Halloween</span> Trick Or Treat!!!
                  <img src="/stars.png" alt="home image" className="home__title-img-1 w-10 absolute -top-4 -left-6 rotate-[-15deg] animate-[wiggle_5s_ease-in-out_infinite] md:w-[60px]" />
                  <img src="/stars.png" alt="home image" className="home__title-img-2 w-10 absolute bottom-11 -right-6 rotate-[15deg] animate-[wiggle2_5s_ease-in-out_infinite] md:w-[60px] md:bottom-16" />
                </h1>

                <p className="home__home description mb-10 font-medium max-w-xl mx-auto py-0 sm:px-28">
                  This Halloween, enjoy trick-or-treating
                  with your friends and spend a terrifying
                  night under the full moon.
                </p>

                <Button
                  text='Explore Now!!!'
                />

              </div>
            </Fade>
            <Fade direction='down' duration={1000} delay={800}>
              <img src="/home-pumpkin.png" alt="home image" className="home__img w-[300px] justify-self-center mt-6 md:w-[500px] xl:w-[600px] xl:mt-12" />
            </Fade>
            <Fade direction='left' duration={1000} delay={800}>
              <img src="/home-tree1.png" alt="home image" className="home__tree-1 w-[120px] absolute max-[340px]:-left-16 top-72 -left-8 xs:w-[200px] md:w-[300px] md:top-56 xl:w-[450px]" />
            </Fade>
            <Fade direction="right" duration={1000} delay={800}>
              <img src="/home-tree2.png" alt="home image" className="home__tree-2 w-[120px] absolute max-[340px]:-right-16 top-72 -right-8 xs:w-[200px] md:w-[300px] md:top-56 xl:w-[450px]" />
            </Fade>
          </div>
        </section>

        {/*==================== CATEGORY ====================*/}
        <section className="category section mx-1 relative mt-20 md:mb-6 ">
          <ShapeSmall positionX='-left-16 lg:-left-[12rem]' positionY='top-[25rem] lg:top-40' />

          <h2 className="section__title block font-second text-first-50 font-normal text-center text-2xl leading-[140%] w-max mx-auto pt-8 mb-20 md:text-3xl">

            Choose your <br />
            spooky category
          </h2>

          <div className="category__container container grid grid-cols-[228px] justify-center gap-y-24 xs:mx-auto sm:grid-cols-2 sm:w-[500px] sm:gap-x-16 lg:grid-cols-3 lg:w-[800px]">
            <Fade direction='down' duration={2500} delay={400}>
              <CategoryCard
                imgSrc='/category-pumpkin.png'
                title='Pumpkins'
                description='Light up horror pumpkins to scare at night'
              />
            </Fade>
            <Fade direction='down' duration={2500} delay={600}>
              <CategoryCard
                imgSrc='/category-ghost.png'
                title='Ghost'
                description='Spooky ghosts to scare in the most haunted houses'
              />
            </Fade>
            <Fade direction='down' duration={2500} delay={800}>
              <CategoryCard
                imgSrc='/category-witch-hat.png'
                title='Witch Hat'
                description='The most Elegant witch hats you can wear and scare'
              />
            </Fade>
          </div>

        </section>

        {/*==================== ABOUT ====================*/}
        <section className="about section mx-1 relative mt-20" id="about">
          <ShapeSmall positionX='-right-12' positionY='top-8' />
          <ShapeBig positionX='-left-32' positionY='bottom-0 lg:-bottom-48' />

          <div className="about__container container grid gap-y-14 xs:mx-auto xs:content-center lg:pt-8 lg:flex lg:items-center lg:justify-between lg:px-10 lg:w-[1024px]">
            <Fade direction='left' duration={2500} delay={400}>

              <div className="about__data text-center lg:w-1/3 lg:text-start ">
                <h2 className="section__title block font-second text-first-50 font-normal text-center text-2xl leading-[140%] w-max mx-auto pt-8 mb-4 md:text-3xl lg:text-start lg:mx-0 lg:mb-6">
                  About The Night <br />
                  Of Terror
                </h2>

                <p className="about__description mb-8 px-4 max-w-xl mx-auto lg:px-0 lg:mb-10">
                  Halloween is celebrated every October 31
                  at night, walk around the city with your
                  friends and trick or treat, enjoy this
                  celebration under the full moon.
                </p>

                <Button
                  text='Know More!!!'
                />

              </div>
              <img src="/about-scare.png" alt="about image" className="about__img w-[300px] justify-self-center lg:-order-1 lg:w-[500px]" />
            </Fade>
          </div>
        </section>

        {/*==================== ITEMS ====================*/}
        <section className="items section mx-1 mt-20 relative" id="items">
          <ShapeBig positionX='-right-32' positionY='-bottom-32 lg:bottom-48' />

          <h2 className="section__title block font-second text-first-50 font-normal text-center text-2xl leading-[140%] w-max mx-auto pt-8 mb-4 md:text-3xl">
            Select your <br />
            lost item
          </h2>

          <div className="items__container container grid pt-8 px-6 max-[340px]:grid-cols-[180px] grid-cols-2 justify-center gap-y-16 gap-x-6 xs:mx-auto xs:grid-cols-[repeat(2,200px)] lg:grid-cols-3 lg:w-[800px] lg:gap-y-24 lg:gap-x-14">
            <Fade direction='down' duration={2500} delay={400}>
              <ItemCard
                imageSrc='/item-apple.png'
                itemName='Candy Apple'
                itemPrice='$4.99'
              />
            </Fade>

            <Fade direction='down' duration={2500} delay={500}>
              <ItemCard
                imageSrc='/item-broom.png'
                itemName='Witch Broom'
                itemPrice='$12.99'
              />
            </Fade>

            <Fade direction='down' duration={2500} delay={600}>
              <ItemCard
                imageSrc='/item-pumpkin.png'
                itemName='Pumpkin'
                itemPrice='$7.99'
              />
            </Fade>

            <Fade direction='down' duration={2500} delay={700}>
              <ItemCard
                imageSrc='/item-spider.png'
                itemName='Spider'
                itemPrice='$9.99'
              />
            </Fade>

            <Fade direction='down' duration={2500} delay={800}>
              <ItemCard
                imageSrc='/item-witch-hat.png'
                itemName='Witch Hat'
                itemPrice='$15.99'
              />
            </Fade>

          </div>

        </section>

        {/*==================== PARTY ====================*/}
        <section className="party section mx-1 mt-20 relative" id="party">
          <div className="party__container container grid gap-y-20 xs:mx-auto  lg:flex lg:items-center lg:justify-between lg:px-20 lg:w-[1024px] lg:gap-y-5 lg:pt-12 ">
            <Fade direction='right' duration={2500} delay={400}>
              <div className="party__data px-4 text-center lg:w-[400px] lg:text-start">
                <h2 className="section__title block font-second text-first-50 font-normal text-center text-2xl leading-[140%] w-max mx-auto pt-8 mb-4 md:text-3xl lg:text-start lg:mx-0 lg:mb-6">
                  Halloween <br />
                  party 31 October
                </h2>

                <p className="party__description mb-8 max-w-xl mx-auto lg:mb-10">
                  Organize a great Halloween party and
                  enjoy the creepiest night of terror with all
                  your friends.
                </p>

                <Button text='Start The Party!!!' />

              </div>

              <div className="party__images relative justify-self-center ">
                <img src="/party-cauldron.png" alt="party image" className="party__img max-[340px]:w-[200px] w-[250px] lg:w-[400px]" />

                <img src="/stars.png" alt="party image" className="party__star-1 w-[50px] absolute rotate-[15deg] -top-12 -left-2 animate-[wiggle_5s_ease-in-out_infinite] lg:w-[100px] lg:-top-20 lg:-left-20" />
                <img src="/stars.png" alt="party image" className="party__star-2 w-[50px] absolute rotate-[15deg] -right-6 bottom-8 animate-[wiggle2_5s_ease-in-out_infinite] lg:w-[100px] lg:bottom-12 lg:-right-12" />
              </div>
            </Fade>
          </div>

        </section>
      </main>

      {/*==================== FOOTER ====================*/}
      <footer className="footer section mx-1 relative pt-20 overflow-hidden">
        <ShapeSmall positionX='-right-[7rem]' positionY='top-[15rem]' />
        <ShapeBig positionX='-left-[8rem]' positionY='-bottom-[5rem] lg:-bottom-[16rem]' />

        <div className="footer__container container grid gap-y-16 px-4 lg:max-w-[1024px] lg:flex lg:mx-auto ">
          <Fade direction='down' duration={2500} delay={400}>
            <div className='lg:w-2/5'>
              <a href="#" className="footer__logo inline-flex items-center gap-y-2 text-first-50 font-medium mb-5 transition duration-300 hover:text-first-100 lg:text-base">
                <img src="/logo-skull.png" alt="logo image" className='w-5 mr-2' />
                Halloween
              </a>

              <p className="footer__description text-[.813rem] font-medium">
                Enjoy the spookiest <br />
                night of your life.
              </p>
            </div>

            <div className="footer__content grid grid-cols-2 max-[340px]:gap-6 gap-y-10 gap-x-6 xs:grid-cols-3 md:grid-cols-4 md:gap-0 md:max-w-3xl lg:gap-20 ">
              <FooterContent
                title='About Us'
                link1='About Us'
                link2='Features'
                link3='News & Blog'
              />
              <FooterContent
                title='Services'
                link1='Pricing'
                link2='Discounts'
                link3='Send a gift'
              />
              <FooterContent
                title='Company'
                link1='Blog'
                link2='Celebrations'
                link3='About'
              />

              <div>
                <h3 className="footer__title text-sm font-semibold mb-6 ">Social Media</h3>

                <ul className="footer__social flex gap-x-5 lg:gap-x-6">
                  <IconsSocialMedia
                    href='https://www.facebook.com/'
                    icon='ri-facebook-circle-fill'
                  />

                  <IconsSocialMedia
                    href='https://www.instagram.com/'
                    icon='ri-instagram-fill'
                  />

                  <IconsSocialMedia
                    href='https://twitter.com/'
                    icon='ri-twitter-fill'
                  />

                </ul>
              </div>
            </div>
          </Fade>
          <Fade direction='right' duration={2500} delay={400}>
            <img src="/footer-tree1.png" alt="footer image" className="footer__tree-1 w-[150px] absolute top-16 -right-6 lg:w-[250px] lg:top-auto lg:bottom-6 lg:-right-8" />
          </Fade>
          <Fade direction='left' duration={2500} delay={400}>
            <img src="/footer-tree2.png" alt="footer image" className="footer__tree-2 w-[150px] absolute -left-6 -bottom-2 lg:w-[250px] lg:-bottom-6 xl:left-[10%]" />
          </Fade>
        </div>

        <span className="footer__copy relative block mt-32 text-sm text-center text-text-100 lg:mt-40 lg:mb-16">
          &#169; Copyright Bedimcode. All rights reserved
        </span>
      </footer>

      {/*========== SCROLL UP ==========*/}
      <a href="#" className={`scrollup fixed right-4 ${scrollPosition >= 350 ? "bottom-12" : "bottom-[-50%]"} text-first-50 text-lg bg-body-100 shadow px-2 py-1 rounded-md inline-flex z-10 transition duration-300 hover:-translate-y-1 lg:right-12`} id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>

      {/*=============== SCROLLREVEAL ===============*/}
      <script src=""></script>

      {/*=============== MAIN JS ===============*/}
      {/* <script src="assets/js/main.js"></script> */}
    </>
  )
}
