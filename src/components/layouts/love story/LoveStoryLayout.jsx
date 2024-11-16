import React, { useEffect } from "react";
import brideImg from "../../../assets/images/bride2.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function LoveStoryLayout() {
  const timelineEvents = [
    {
      date: "15 September 2022",
      description:
        "Pada sebuah acara teman, tak sengaja kami bertemu untuk pertama kalinya. Saat itu, kami tidak menyadari bahwa ini adalah awal dari perjalanan hidup bersama. Kami berbicara tentang banyak hal, dan meskipun pertemuan itu singkat, ada perasaan yang mengikat hati kami berdua. Dari hari itu, kami mulai mengenal satu sama lain lebih dekat, dan hubungan itu tumbuh perlahan namun pasti.",
    },
    {
      date: "24 Februari 2024",
      description:
        "Pada hari yang penuh cinta, dia melamarku dengan cara yang sangat romantis. Di tengah-tengah suasana yang intim, dia mengungkapkan perasaannya dan bertanya apakah aku bersedia menghabiskan sisa hidup bersamanya. Dengan hati yang penuh kebahagiaan, aku menjawab 'ya!' dan kami merencanakan masa depan bersama. Itu adalah momen yang tak akan pernah kami lupakan.",
    },
    {
      date: "24 November 2024",
      description:
        "Hari yang sangat kami tunggu-tunggu akhirnya datang. Dengan penuh rasa syukur, kami menikah di hadapan keluarga dan sahabat terdekat. Momen sakral ini menandai dimulainya perjalanan baru sebagai pasangan suami istri. Kami berdua merasa sangat berbahagia bisa saling mendukung, mengasihi, dan menjalani hidup bersama di hari-hari mendatang. Pernikahan kami adalah simbol cinta sejati yang akan terus berkembang.",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center text-secondary"
      style={{ backgroundImage: `url(${brideImg})` }}
    >
      <div className="p-10 w-full min-h-screen flex flex-col items-center justify-center">
        <h1
          className="font-EBGaramond text-3xl text-center text-secondary mb-10 tracking-widest"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          KISAH CINTA KAMI
        </h1>
        <div className="max-w-2xl mx-auto relative">
          <div
            className="relative border-l-4 border-gold pl-8 space-y-10"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {timelineEvents.map((event, index) => (
              <div className="relative p-6">
                {/* Decorative Floral Icon */}
                <div className="absolute -left-10 top-0 w-5 h-5 bg-red-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">
                    <div className="absolute top-0 left-0 w-full h-full bg-secondary rounded-full"></div>
                  </span>{" "}
                  {/* Heart Icon */}
                </div>
                {/* Date and Description */}
                <div
                  className="text-2xl font-semibold text-gold mb-2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {event.date}
                </div>
                <p
                  className="text-[16px] text-bColor italic"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
