import React, { useState, useEffect } from "react";
import brideImg from "../../../assets/images/bride.png";
import Aos from "aos";
import "aos/dist/aos.css";

// Komponen Countdown Timer
const CountdownBox = ({ value, label, duration }) => (
  <div
    data-aos="fade-up"
    data-aos-duration={duration}
    className="bg-white/10 border-2 border-akad px-4 py-2 text-center rounded-lg"
  >
    <p className="font-Inter font-medium text-[#838383]">{value}</p>
    <p className="font-Inter font-medium text-[#838383]">{label}</p>
  </div>
);

export default function AkadLayout() {
  const weddingDate = new Date("2024-11-24T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Hitung waktu yang tersisa
  useEffect(() => {
    Aos.init();

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(countdown);
      }
    };

    const countdown = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(countdown);
  }, [weddingDate]);

  return (
    <section
      className="min-h-screen bg-cover bg-center px-10 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${brideImg})` }}
    >
      <div className="w-full grid grid-cols-1 place-items-center">
        <h1
          data-aos="fade-out"
          data-aos-duration="800"
          className="font-DancingScript font-extralight text-secondary/50 text-6xl transform -rotate-6"
        >
          Save The Date
        </h1>
        <h2
          data-aos="zoom-in"
          data-aos-duration="800"
          className="mt-10 font-EBGaramond font-light text-secondary text-lg"
        >
          FOR THE WEDDING
        </h2>
        <h3
          data-aos="zoom-in"
          data-aos-duration="800"
          className="mt-5 font-EBGaramond font-light text-secondary text-3xl"
        >
          IWAN & NOVI
        </h3>
        <p
          data-aos="zoom-out"
          data-aos-duration="800"
          className="mt-5 font-EBGaramond font-light text-secondary text-xl"
        >
          24 / 11 / 2024
        </p>
        {/* Countdown Timer */}
        <div className="w-full flex items-center justify-between gap-2 mt-5">
          {[
            { value: timeLeft.days, label: "Hari", duration: 500 },
            { value: timeLeft.hours, label: "Jam", duration: 800 },
            { value: timeLeft.minutes, label: "Menit", duration: 1100 },
            { value: timeLeft.seconds, label: "Detik", duration: 1400 },
          ].map((item, index) => (
            <CountdownBox
              key={index}
              value={item.value}
              label={item.label}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
