import React from "react";
import coverImg from "../../../assets/images/10.png";

// Komponen untuk menampilkan bagian teks di cover
const CoverText = () => (
  <div className="fixed bottom-20 left-10 grid grid-cols-1 gap-5">
    <p className="font-Playfair font-light text-white text-lg tracking-[3px] lg:text-xl lg:tracking-[10px]">
      UNDANGAN PERNIKAHAN
    </p>
    <h1 className="font-Playfair font-bold text-4xl text-white lg:text-6xl">
      IWAN & NOVI
    </h1>
    <span className="font-EBGaramond font-light text-white text-lg tracking-[7px]">
      24 November 2024
    </span>
  </div>
);

export default function CoverLayout() {
  return (
    <section
      className="fixed left-0 top-0 w-[965px] h-screen bg-cover bg-center hidden md:block"
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      <div className="w-full h-screen bg-gradient-to-t from-black to-transparent">
        {/* Menampilkan teks cover */}
        <CoverText />
      </div>
    </section>
  );
}
