import React, { useEffect } from "react";
import openingBg from "../../../assets/images/opening.png";
import openingImg from "../../../assets/images/12.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OpeningLayout({ openingRef }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
      id="opening"
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${openingBg})` }}
        ref={openingRef}
      >
        <div className="p-10 ">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="w-full bg-[#1A2B38] grid grid-cols-1 rounded-xl overflow-hidden"
          >
            <img src={openingImg} alt="" className="" />
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="grid grid-cols-1 gap-3 p-5 place-items-center "
            >
              <p className="font-EBGaramond font-light text-[18px] text-center text-secondary">
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
                yang berpikir."
              </p>
              <h2 className="font-EBGaramond font-semibold text-[18px] text-secondary">
                QS Ar-Rum 21
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
