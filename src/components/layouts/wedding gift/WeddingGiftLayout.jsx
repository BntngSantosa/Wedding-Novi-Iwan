import React from "react";
import brideImg from "../../../assets/images/bride2.png";
import decor from "../../../assets/images/dekorasi.png";

// Reusable component for displaying account information with copy functionality
const AccountInfo = ({ bankName, accountNumber, ownerName }) => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Nomor rekening berhasil disalin!");
    });
  };

  return (
    <div
      className="relative w-full h-32 px-5 rounded-lg flex flex-col items-start justify-center bg-gradient-to-r from-primary to-secondary overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <img
        src={decor}
        alt="Decorative background"
        className="absolute top-0 left-0 w-full h-32 object-cover mix-blend-multiply opacity-50 -z-10"
      />
      <h1 className="font-EBGaramond font-bold text-2xl text-black/50">
        {bankName}
      </h1>
      <div className="flex">
        <p className="font-Inter font-medium text-md text-black/60">
          {accountNumber}
        </p>
        <button
          className="ml-2 text-sm text-black/70 hover:text-black"
          onClick={() => handleCopy(accountNumber)}
          aria-label="Salin nomor rekening"
        >
          Salin
        </button>
      </div>
      <p className="font-Inter font-normal text-sm text-black/70">
        {ownerName}
      </p>
    </div>
  );
};

export default function WeddingGiftLayout() {
  return (
    <section
      className="h-full bg-cover bg-center text-secondary"
      style={{ backgroundImage: `url(${brideImg})` }}
    >
      <div className="p-10">
        <h1
          className="font-EBGaramond text-3xl text-center text-secondary mb-10 tracking-widest"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          WEDDING GIFT
        </h1>

        <AccountInfo
          bankName="BRI"
          accountNumber="326701057286533"
          ownerName="Novi"
        />
        <p className="font-Inter font-normal text-sm mt-2 text-center">
          Kirim bukti pembayaran ke{" "}
          <a target="_blank" href="https://wa.me/+6282113699758">
            0821-1369-9758
          </a>
        </p>
      </div>
    </section>
  );
}
