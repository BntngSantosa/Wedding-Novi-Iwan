import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import introImg from "../../../assets/images/intro.png";
import AOS from "aos";
import "aos/dist/aos.css";

// IntroText Component to handle repeated AOS animations with text
const IntroText = ({ aosData, children, className }) => (
  <h2
    data-aos={aosData}
    data-aos-anchor-placement="top-bottom"
    data-aos-duration="800"
    className={className}
  >
    {children}
  </h2>
);

// Button Component for main action
const ActionButton = ({ onClick }) => (
  <motion.button
    initial={{
      scale: 0.9,
      opacity: 0,
    }}
    animate={{
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    }}
    onClick={onClick}
    whileHover={{
      scale: 0.95,
    }}
    whileTap={{
      scale: 1,
    }}
    className="w-52 py-[10px] bg-gradient-to-r from-gradOne to-loc rounded-[30px] font-EBGaramond font-medium text-[14px] text-white"
  >
    LIHAT UNDANGAN
  </motion.button>
);

// Section Background Image
const SectionImage = () => (
  <img
    src={introImg}
    alt="Intro Background"
    className="w-full h-screen bg-no-repeat object-cover"
  />
);

// Section Content Layout
const SectionContent = ({ namaTamu, onShowMain }) => (
  <div className="w-full absolute top-[42%] -translate-y-1/2 left-1/2 -translate-x-1/2 grid grid-cols-1 gap-10">
    <div className="grid grid-cols-1 gap-5 place-items-center">
      <IntroText
        aosData="fade-up"
        className="font-Playfair font-medium text-[16px] text-primary"
      >
        The wedding of
      </IntroText>
      <IntroText
        aosData="fade-up"
        className="font-Parisiene font-light text-[35px] text-primary"
      >
        Iwan & Novi
      </IntroText>
    </div>
    <div className="grid grid-cols-1 place-items-center">
      <IntroText
        aosData="fade-left"
        className="font-EBGaramond font-normal text-[16px] text-secondary"
      >
        Kepada Yth.
      </IntroText>
      <IntroText
        aosData="fade-right"
        className="font-EBGaramond font-normal text-[16px] text-secondary mb-5"
      >
        Bapak/Ibu/Saudara/i
      </IntroText>
      <IntroText
        aosData="zoom-in"
        className="font-Playfair italic font-light text-[18px] text-secondary mb-5"
      >
        {namaTamu ? namaTamu : "Nama Tamu"}
      </IntroText>
      <ActionButton onClick={onShowMain} />
    </div>
  </div>
);

// Main Introlayout Component
export default function Introlayout({ onShowMain }) {
  const { namaTamu } = useParams();
  const decodeNamaTamu = decodeURIComponent(namaTamu || "");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="intro"
      className="relative w-full h-screen md:max-w-md md:absolute md:right-0"
    >
      <SectionImage />
      <SectionContent namaTamu={namaTamu ? decodeNamaTamu : "Nama Tamu"} onShowMain={onShowMain} />
    </section>
  );
}
