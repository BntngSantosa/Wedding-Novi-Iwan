import React, { useEffect } from "react";
import brideImg from "../../../assets/images/akad.png";
import frame from "../../../assets/images/frame.png";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

// Komponen untuk menampilkan detail acara
const EventDetails = ({ title, date, time, location, address, mapLink }) => (
  <div className="w-full grid grid-cols-1 gap-3 place-items-center text-center mt-10">
    <h1
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
      className="font-Playfair font-normal text-2xl text-third"
    >
      {title}
    </h1>
    <p
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
      className="font-EBGaramond font-normal text-[18px] text-[#666666]"
    >
      {date}
    </p>
    <p
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
      className="font-EBGaramond font-normal text-[18px] text-[#666666]"
    >
      {time}
    </p>
    <p
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
      className="font-EBGaramond font-normal text-[18px] text-[#666666]"
    >
      {location}
    </p>
    <p
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
      className="font-EBGaramond font-normal text-[14px] text-[#666666]"
    >
      {address}
    </p>
    <Link
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="500"
      to={mapLink}
      target="_blank"
      className="w-48 py-[10px] bg-gradient-to-r from-gradOne to-loc rounded-[30px] font-EBGaramond font-medium text-[14px] text-white"
    >
      LIHAT LOKASI
    </Link>
  </div>
);

export default function AcaraLayout() {
  useEffect(() => {
    Aos.init();
  }, []);

  const acaraData = [
    {
      title: "AKAD NIKAH",
      date: "Minggu, 24 November 2024",
      time: "09.00 WIB",
      location: "Kediaman Mempelai Wanita",
      address: "Kp. Cipicung , Cipangeran, Kec. Saguling, Kab. Bandung Barat",
      mapLink: "https://maps.app.goo.gl/cyn1fcqLpVCAnkfT6",
    },
    {
      title: "RESEPSI NIKAH",
      date: "Minggu, 24 November 2024",
      time: "10.00 WIB",
      location: "Kediaman Mempelai Wanita",
      address: "Kp. Cipicung , Cipangeran, Kec. Saguling, Kab. Bandung Barat",
      mapLink: "https://maps.app.goo.gl/cyn1fcqLpVCAnkfT6",
    },
  ];

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${brideImg})` }}
    >
      <div className="p-10">
        <img src={frame} alt="Frame" />
      </div>
      <div className="absolute top-[50%] -translate-y-1/2 left-1/2 -translate-x-1/2">
        {acaraData.map((event, index) => (
          <EventDetails key={index} {...event} />
        ))}
      </div>
    </section>
  );
}
