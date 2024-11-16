import React, { useEffect } from "react";
import brideImgTwo from "../../../assets/images/bride2.png";
import noviImg from "../../../assets/images/novi.png";
import iwanImg from "../../../assets/images/iwan.png";
import AOS from "aos";
import "aos/dist/aos.css";

// Komponen untuk Menampilkan Info Mempelai
const PersonInfo = ({ imgSrc, name, title, description, aosDuration }) => (
  <div className="grid grid-cols-1 place-items-center gap-5">
    <img
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration={aosDuration}
      src={imgSrc}
      alt={name}
      className="w-[50%]"
    />
    <div className="text-center">
      <h1
        data-aos="zoom-in"
        data-aos-duration={aosDuration}
        className="font-DancingScript font-semibold text-primary text-7xl"
      >
        {name}
      </h1>
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration={aosDuration}
        className="font-EBGaramond font-light text-secondary text-lg mt-5"
      >
        {title}
      </h2>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration={aosDuration}
        className="font-inter font-normal text-secondary text-[16px] mt-5"
      >
        {description}
      </p>
    </div>
  </div>
);

export default function BrideLayout() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${brideImgTwo})` }}
    >
      <div className="p-10">
        <h1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
          className="font-EBGaramond font-normal text-[21px] text-secondary text-center px-16"
        >
          Assalamu'alaikum warahmatullahi wabarakatuh
        </h1>
        <p
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="800"
          className="font-EBGaramond font-light text-secondary text-center mt-5 px-5"
        >
          Dengan memohon Rahmat dan Ridho Allah SWT kami bermaksud untuk
          mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
        </p>
        {/* Menampilkan Info Novi */}
        <PersonInfo
          imgSrc={noviImg}
          name="Novi"
          title="NOVI THE BRIDE"
          description="Putri dari Bapak Usen dan Ibu Yati"
          aosDuration="800"
        />
        <p
          data-aos="zoom-in"
          data-aos-duration="800"
          className="font-DancingScript font-semibold text-primary text-5xl text-center my-10"
        >
          &
        </p>
        {/* Menampilkan Info Iwan */}
        <PersonInfo
          imgSrc={iwanImg}
          name="Iwan"
          title="IWAN THE GROOM"
          description="Putra dari Bapak Nana dan Ibu Titin"
          aosDuration="800"
        />
      </div>
    </section>
  );
}
